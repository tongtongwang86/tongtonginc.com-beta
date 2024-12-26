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
  const [loading, setLoading] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [hdrLoaded, setHdrLoaded] = useState(false);

  useEffect(() => {
    // Renderer Initialization
    const initializeRenderer = () => {
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // Enable anti-aliasing
      renderer.setPixelRatio(window.devicePixelRatio);
      rendererRef.current = renderer;
      if (canvasRef.current) {
        canvasRef.current.appendChild(renderer.domElement);
      }
    };

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 1000);
    camera.position.set(-4, 3, 7);

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
        setHdrLoaded(true);
      });

      // Load models and center them
      const loader = new GLTFLoader();
      const group = new THREE.Group();
      groupRef.current = group;
      scene.add(group);

      loader.load('/assets/revolute/models/revoluteBase.glb', (gltf) => {
        const base = gltf.scene;
        group.add(base);
        centerGroup(group);
      });

      loader.load('/assets/revolute/models/revoluteCap.glb', (gltf) => {
        const cap = gltf.scene;
        capRef.current = cap;
        group.add(cap);
        centerGroup(group);
        setModelLoaded(true);
      });

      // Camera Controls
      const controls = new OrbitControls(camera, renderer!.domElement);

      controls.enableDamping = true; // Enable damping for smooth motion
      controls.dampingFactor = 0.06; // Adjust for smoother slowing down (lower = smoother)
      controls.rotateSpeed = 0.4; // Lower rotation speed for less sensitivity
      controls.enablePan = false; // Disable panning
      controls.enableZoom = false; // Disable zooming



      // Event Listeners
      window.addEventListener('scroll', handleScroll);

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
      scrollRef.current = (scrollFraction * Math.PI * 2 - Math.PI) * 2; // scale to 200%
    };

   
    // Resize Event Handler
    const handleResize = () => {
      if (!canvasRef.current || !rendererRef.current) return;
      const { clientWidth, clientHeight } = canvasRef.current;
      camera.aspect = 1;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(clientWidth, clientHeight);
    };

    // Initialize everything
    setIsClient(true);
    const cleanup = initializeScene();

    return cleanup; // Clean up when component unmounts
  }, []);

  useEffect(() => {
    if (modelLoaded && hdrLoaded) {
      setLoading(false);
    }
  }, [modelLoaded, hdrLoaded]);

  return (
    <div className='h-full w-max-full'>
      {loading && (
      <div className="mx-auto animate-pulse bg-zinc-900 rounded-3xl h-[50vh] aspect-square  max-w-full flex justify-center items-center text-center text-white text-2xl" style={{ opacity: loading ? 1 : 0 }}>
        Loading
      </div>
      )}
      <div ref={canvasRef} className=" aspect-square h-full max-w-full" style={{ opacity: loading ? 0 : 1 }} />
    </div>
  );
};

export default ThreeCanvas;
