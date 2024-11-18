'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

const ThreeCanvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const capRef = useRef<THREE.Object3D | null>(null);
  const scrollRef = useRef(0);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Renderer Initialization
    const initializeRenderer = () => {
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      rendererRef.current = renderer;
      if (canvasRef.current) {
        canvasRef.current.appendChild(renderer.domElement);
      }
    };

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(0, 2, 5);

    const initializeScene = () => {
      if (!rendererRef.current) initializeRenderer();
      if (!canvasRef.current) return;

      const renderer = rendererRef.current;

      // Add environment lighting
      const rgbeLoader = new RGBELoader();
      rgbeLoader.load('/textures/environment.hdr', (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
        scene.background = null;
      });

      // Load models and center them
      const loader = new GLTFLoader();
      const group = new THREE.Group();
      groupRef.current = group;
      scene.add(group);

      loader.load('/models/revoluteBase.glb', (gltf) => {
        const base = gltf.scene;
        group.add(base);
        centerGroup(group);
      });

      loader.load('/models/revoluteCap.glb', (gltf) => {
        const cap = gltf.scene;
        capRef.current = cap;
        group.add(cap);
        centerGroup(group);
      });

      // Camera Controls
      const controls = new OrbitControls(camera, renderer!.domElement);

      controls.enableDamping = true;
      controls.dampingFactor = 0.1;
      controls.rotateSpeed = 0.5;
      controls.enablePan = false; // Disable panning

      // Event Listeners
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);

      handleResize(); // Initial resize setup

      // Animation Loop
      const animate = () => {
        requestAnimationFrame(animate);
      
        if (capRef.current) {
          capRef.current.rotation.y = scrollRef.current;
        }
      
        if (rendererRef.current) { // Ensure renderer is not null
          const renderer = rendererRef.current;
          controls.update();
          renderer.render(scene, camera);
        }
      };

      animate();

      // Cleanup on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        controls.dispose();
        if (rendererRef.current) {
          rendererRef.current.dispose();
          if (rendererRef.current.domElement && canvasRef.current) {
            canvasRef.current.removeChild(rendererRef.current.domElement);
          }
        }
      };
    };

    // Center the 3D group object
    const centerGroup = (group: THREE.Object3D) => {
      const box = new THREE.Box3().setFromObject(group);
      const center = box.getCenter(new THREE.Vector3());
      group.position.sub(center);
    };

    // Scroll Event Handler
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = window.scrollY / maxScroll;
      scrollRef.current = scrollFraction * Math.PI * 2 - Math.PI;
    };

    // Resize Event Handler
    const handleResize = () => {
      if (!canvasRef.current || !rendererRef.current) return;
      const { clientWidth, clientHeight } = canvasRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(clientWidth, clientHeight);
    };

    // Initialize everything
    setIsClient(true);
    const cleanup = initializeScene();
    
    return cleanup; // Clean up when component unmounts
  }, []);

  return (
    <div
      ref={canvasRef}
      className="border w-1/2 h-96 relative"
    >

    </div>
  );
};

export default ThreeCanvas;
