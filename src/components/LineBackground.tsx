"use client";
// components/ThreeBackground.tsx

import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { SimplexNoise } from 'three/addons/math/SimplexNoise.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Import OrbitControls

const ThreeBackground: React.FC = () => {
  // State variables for user controls
  const [maxAmplitude, setMaxAmplitude] = useState(0.5);
  const [lineLength, setLineLength] = useState(30); // Line Length
  const [numLines, setNumLines] = useState(50); // Number of Lines (horizontal subdivisions)
  const [lineColor, setLineColor] = useState("#FFFFFFFF"); // Line Color (default purple in hex format)
  const [lineDensity, setLineDensity] = useState(200); // Line Density (horizontal subdivisions)
  const [lineResolution, setLineResolution] = useState(8); // Line Resolution (vertical subdivisions)
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Control visibility of options menu
  
  // State to track camera position and rotation
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 0 });
  const [cameraRotation, setCameraRotation] = useState({ x: 0, y: 0, z: 0 });

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const lineRef = useRef<THREE.LineSegments | null>(null);
  const geometryRef = useRef<THREE.PlaneGeometry | null>(null);
  const posRef = useRef<THREE.BufferAttribute | null>(null);
  const simplexRef = useRef<SimplexNoise | null>(null);

  useEffect(() => {
    console.clear();

    // Scene Setup
    const scene = new THREE.Scene();
    scene.background = null; // Set scene background to null for transparency
    sceneRef.current = scene;

    // Camera Setup (increased FOV)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight); // Increased FOV to 75
    camera.position.set(4, 2, 8);
    camera.lookAt(scene.position);
    cameraRef.current = camera;

    // Renderer Setup (with transparent background)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true for transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Make sure to clear with no color (fully transparent background)
    renderer.setAnimationLoop(animationLoop);
    rendererRef.current = renderer;
    document.body.appendChild(renderer.domElement);

    // OrbitControls Setup (for camera orbiting)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;  // Smooth movement
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;  // Restrict panning to the XZ plane
    controls.maxPolarAngle = Math.PI; // Allow full vertical movement (unrestricted)
    controlsRef.current = controls;

    // Resize Handling
    window.addEventListener("resize", () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    });

    // Geometry for the Wave (dynamic segments based on numLines, lineDensity, and lineResolution)
    const geometry = new THREE.PlaneGeometry(lineLength, 4, lineDensity, lineResolution); // Use state for lineLength, lineDensity, and lineResolution
    const pos = geometry.getAttribute('position');
    const simplex = new SimplexNoise();
    simplexRef.current = simplex;
    geometryRef.current = geometry;
    posRef.current = pos;

    // Create LineSegments to connect the points horizontally
    const lineMaterial = new THREE.LineBasicMaterial({ color: new THREE.Color(lineColor), linewidth: 4 }); // Use dynamic line color
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];
    const lineColors: number[] = [];

    // Create a function to connect the points horizontally and apply a constant color
    function updateLinePositions() {
      linePositions.length = 0; // Reset the line positions on each update
      lineColors.length = 0; // Reset the colors on each update

      // Connecting the points horizontally based on line density and line resolution
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = pos.getZ(i);

        // Apply maxAmplitude to the z-value
        const amplitudeZ = maxAmplitude * simplex.noise3d(x / 2, y / 2, Date.now() / 2000); // Multiply by maxAmplitude to control wave height

        // Set the position of the point
        pos.setZ(i, amplitudeZ);

        // Add constant color to the line (all lines are purple)
        const color = new THREE.Color(lineColor); // Use dynamic line color
        lineColors.push(color.r, color.g, color.b);

        // Find the right neighbor (horizontal connection) with a resolution factor
        if ((i + 1) % (lineDensity + 1) !== 0) { // Avoid wrapping around to the next row
          const nextX = pos.getX(i + 1);
          const nextY = pos.getY(i + 1);
          const nextZ = pos.getZ(i + 1);

          // Add the line segment positions
          linePositions.push(x, y, z, nextX, nextY, nextZ);

          // Add the corresponding colors for the line (constant color for both ends)
          lineColors.push(color.r, color.g, color.b); // Apply same color to both ends of the line
        }
      }

      // Update the geometry with the new line positions and colors
      linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      linesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
    }

    // Add the line geometry to the scene
    const lines = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(lines);
    lineRef.current = lines;

    // Animation Loop
    function animationLoop(t: number) {
      // Update the Z position of each particle based on SimplexNoise
      const pos = geometry.getAttribute('position');
      if (posRef.current && simplexRef.current) {
        for (let i = 0; i < pos.count; i++) {
          const x = pos.getX(i);
          const y = pos.getY(i);
          const z = maxAmplitude * simplexRef.current.noise3d(x / 2, y / 2, t / 2000); // Scale z-value by maxAmplitude
          pos.setZ(i, z);
        }
        pos.needsUpdate = true;
      }

      // Update the line positions to follow the wave
      updateLinePositions();

      // Update the controls (for orbiting the camera)
      controlsRef.current?.update();

      // Update the camera position and rotation in state for display
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
      }

      // Render the scene
      rendererRef.current?.render(scene, camera);
    }

    // Cleanup on unmount or when values change
    return () => {
      // Dispose of the geometry and material
      if (lineRef.current) {
        lineRef.current.geometry.dispose();
        lineRef.current.material.dispose();
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
  }, []); // Empty dependency array to ensure this effect only runs once

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
