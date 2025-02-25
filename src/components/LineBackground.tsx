"use client";
// components/LineBackground.tsx

import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { SimplexNoise } from 'three/addons/math/SimplexNoise.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Define types for ref states
const ThreeBackground: React.FC = () => {
  // State variables for user controls
  const [maxAmplitude, setMaxAmplitude] = useState<number>(0.5);
  const [lineLength, setLineLength] = useState<number>(30);
  const [numLines, setNumLines] = useState<number>(50);
  const [lineColor, setLineColor] = useState<string>("#FFFFFFFF");
  const [lineDensity, setLineDensity] = useState<number>(200);
  const [lineResolution, setLineResolution] = useState<number>(8);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 0 });
  const [cameraRotation, setCameraRotation] = useState({ x: 0, y: 0, z: 0 });

  // Refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const lineRef = useRef<THREE.LineSegments | null>(null);
  const geometryRef = useRef<THREE.PlaneGeometry | null>(null);

  // Update the type of posRef to allow both BufferAttribute and InterleavedBufferAttribute
  const posRef = useRef<THREE.BufferAttribute | THREE.InterleavedBufferAttribute | null>(null);
  const simplexRef = useRef<SimplexNoise | null>(null);

  useEffect(() => {
    console.clear();

    // Scene Setup
    const scene = new THREE.Scene();
    scene.background = null; // Set scene background to null for transparency
    sceneRef.current = scene;

    // Camera Setup (increased FOV)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight); 
    camera.position.set(4, 2, 8);
    camera.lookAt(scene.position);
    cameraRef.current = camera;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); 
    renderer.setAnimationLoop(animationLoop);
    rendererRef.current = renderer;
    document.body.appendChild(renderer.domElement);

    // OrbitControls Setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI;
    controlsRef.current = controls;

    // Resize Handling
    window.addEventListener("resize", () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    });

    // Geometry for the Wave
    const geometry = new THREE.PlaneGeometry(lineLength, 4, lineDensity, lineResolution);
    const pos = geometry.getAttribute('position');
    const simplex = new SimplexNoise();
    simplexRef.current = simplex;
    geometryRef.current = geometry;
    posRef.current = pos; // pos is now safely assigned

    // Create LineSegments for horizontal connections
    const lineMaterial = new THREE.LineBasicMaterial({ color: new THREE.Color(lineColor), linewidth: 4 });
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];
    const lineColors: number[] = [];

    // Function to update line positions and colors
    function updateLinePositions() {
      linePositions.length = 0; 
      lineColors.length = 0; 

      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = pos.getZ(i);

        const amplitudeZ = maxAmplitude * simplex.noise3d(x / 2, y / 2, Date.now() / 2000);

        pos.setZ(i, amplitudeZ);

        const color = new THREE.Color(lineColor); 
        lineColors.push(color.r, color.g, color.b);

        if ((i + 1) % (lineDensity + 1) !== 0) {
          const nextX = pos.getX(i + 1);
          const nextY = pos.getY(i + 1);
          const nextZ = pos.getZ(i + 1);

          linePositions.push(x, y, z, nextX, nextY, nextZ);
          lineColors.push(color.r, color.g, color.b); 
        }
      }

      linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      linesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
    }

    const lines = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(lines);
    lineRef.current = lines;

    // Animation Loop
    function animationLoop(t: number) {
      const pos = geometry.getAttribute('position');
      if (posRef.current && simplexRef.current) {
        for (let i = 0; i < pos.count; i++) {
          const x = pos.getX(i);
          const y = pos.getY(i);
          const z = maxAmplitude * simplexRef.current.noise3d(x / 2, y / 2, t / 2000);
          pos.setZ(i, z);
        }
        pos.needsUpdate = true;
      }
    
      updateLinePositions();
      controlsRef.current?.update();
    
      const camera = cameraRef.current;
      if (camera) {
        setCameraPosition({
          x: camera.position.x,
          y: camera.position.y,
          z: camera.position.z,
        });
        setCameraRotation({
          x: camera.rotation.x,
          y: camera.rotation.y,
          z: camera.rotation.z,
        });
    
        // Only render if the camera is available
        rendererRef.current?.render(scene, camera);
      }
    }
    
    return () => {
      if (lineRef.current) {
        lineRef.current.geometry.dispose();
      
        // Check if the material is an array or a single material
        const materials = Array.isArray(lineRef.current.material)
          ? lineRef.current.material
          : [lineRef.current.material];
      
        // Dispose of each material in the array (or the single material)
        materials.forEach(material => material.dispose());
      }
      

      if (rendererRef.current && sceneRef.current) {
        rendererRef.current.dispose();
        sceneRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh || object instanceof THREE.Line) {
            if (object.geometry) object.geometry.dispose();
            if (object.material) object.material.dispose();
          }
        });
      }

      if (controlsRef.current) controlsRef.current.dispose();
    };
  }, []); 

  return (
    <div>
      <div id="three-background"></div>

      {/* Camera Info Overlay */}
      <div style={{ position: 'absolute', top: 10, left: 10, color: 'white', fontSize: '16px' }}>
        <div>Camera Position: X: {cameraPosition.x.toFixed(2)}, Y: {cameraPosition.y.toFixed(2)}, Z: {cameraPosition.z.toFixed(2)}</div>
        <div>Camera Rotation: X: {cameraRotation.x.toFixed(2)}, Y: {cameraRotation.y.toFixed(2)}, Z: {cameraRotation.z.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ThreeBackground;
