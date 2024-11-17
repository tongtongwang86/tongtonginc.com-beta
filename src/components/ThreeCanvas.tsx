'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

const ThreeCanvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const capRef = useRef<THREE.Object3D | null>(null); // Reference to revoluteCap object
  const capRotationRef = useRef(0); // Ref to hold the current rotation value
  const [capRotation, setCapRotation] = useState(0); // State for slider

  // Sync the rotation state to the ref so the animation loop always has the latest value
  useEffect(() => {
    capRotationRef.current = capRotation;
  }, [capRotation]);

  useEffect(() => {
    const width = canvasRef.current?.clientWidth || 800;
    const height = canvasRef.current?.clientHeight || 600;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 2, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Attach renderer to DOM
    if (canvasRef.current) {
      canvasRef.current.appendChild(renderer.domElement);
    }

    // Load Environment Map
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load('/textures/environment.hdr', (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture; // Illuminates objects
      scene.background = null; // Keeps the background transparent
    });

    // Load Models
    const loader = new GLTFLoader();
    const group = new THREE.Group(); // Group to hold both objects

    loader.load('/models/revoluteBase.glb', (gltf) => {
      const base = gltf.scene;
      base.position.set(0, 0, 0); // Position at origin
      group.add(base);
    });

    loader.load('/models/revoluteCap.glb', (gltf) => {
      const cap = gltf.scene;
      cap.position.set(0, 0, 0); // Position at origin
      capRef.current = cap; // Save a reference to the cap for rotation
      group.add(cap);
    });

    scene.add(group);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth dragging
    controls.dampingFactor = 0.1;
    controls.rotateSpeed = 0.5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update cap's Y rotation based on the latest ref value
      if (capRef.current) {
        capRef.current.rotation.y = capRotationRef.current;
      }

      // Update controls
      controls.update();

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      controls.dispose();
      canvasRef.current?.removeChild(renderer.domElement);
    };
  }, []); // Only run once on mount

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div ref={canvasRef} className="w-full h-[90%]"></div>
      <input
        type="range"
        min={-Math.PI}
        max={Math.PI}
        step={0.01}
        value={capRotation}
        onChange={(e) => setCapRotation(parseFloat(e.target.value))} // Update state
        className="w-[80%] mt-4"
      />
    </div>
  );
};

export default ThreeCanvas;
