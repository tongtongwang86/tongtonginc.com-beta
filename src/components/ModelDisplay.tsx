'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';


interface ModelCanvasProps {
  modelName: string;
}

const ModelCanvas: React.FC<ModelCanvasProps> = ({ modelName }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null); // Ref for the loader

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, 1, 0.1, 1000);
    camera.position.set(0, 2, 25);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    const rgbeLoader = new RGBELoader();
    const gltfLoader = new GLTFLoader();
    let model: THREE.Group | null = null;

    let animationFrameId: number;

    const handleResize = () => {
      if (!canvasRef.current) return;
      const { clientWidth, clientHeight } = canvasRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    const initializeScene = () => {
      if (!canvasRef.current) return;

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
      canvasRef.current.appendChild(renderer.domElement);

      // Environment lighting
      rgbeLoader.load('/textures/cloudy_ocean_roadside_1k.hdr', (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
        scene.background = null;
      });

      // Show loading spinner
      if (loaderRef.current) {
        loaderRef.current.style.display = 'flex';
      }

      // Load model
      gltfLoader.load(
        `/models/teachers/${modelName}`,
        (gltf) => {
          model = gltf.scene;

          // Center the model
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);

          scene.add(model);

          // Hide loading spinner once model is loaded
          if (loaderRef.current) {
            loaderRef.current.style.display = 'none';
          }
        },
        (xhr) => {
          // Optional: You can use the onProgress callback to track load progress.
          // console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (error) => {
          console.error('Error loading model:', error);
          // Hide loading spinner even if there's an error
          if (loaderRef.current) {
            loaderRef.current.style.display = 'none';
          }
        }
      );

      // Resize listener
      window.addEventListener('resize', handleResize);
      handleResize(); // Initial sizing

      // Animation loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        if (model) {
          // Rotate the model slowly
          model.rotation.y += 0.01; // Adjust speed as necessary
        }

        controls.update();
        renderer.render(scene, camera);
      };

      animate();
    };

    initializeScene();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [modelName]);

  return (
    <div ref={canvasRef} className="w-full h-64 relative">
      {/* Loading spinner */}
      <div
        ref={loaderRef}
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
        style={{ display: 'none' }} // Initially hidden
      >
        <div className="border-4 border-white border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
      </div>
    </div>
  );
};






const ModelDisplay = () => {
  const [models, setModels] = useState<string[]>([]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch('/api/models');
        if (!response.ok) {
          throw new Error(`Failed to fetch models: ${response.statusText}`);
        }
        const modelList = await response.json();
        setModels(modelList);
      } catch (error) {
        console.error('Error fetching models:', error);
      }
    };

    fetchModels();
  }, []);

  const handleDownload = (modelName: string) => {
    const teacherName = modelName.replace('.glb', '');
    const stlFileName = `${teacherName}.stl`; // Ensure .stl extension
    const fileUrl = `/models/teachers/stl/${stlFileName}`; // Direct path to public folder
    console.log(`Downloading from URL: ${fileUrl}`); // Print URL to console


    // Dynamically create a link and trigger download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = stlFileName; // Save as correct file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="grid gap-8 p-4 w-screen"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(25em, 1fr))',
      }}
    >
      {models.map((model) => (
        <div
          key={model}
          className="flex flex-col items-center bg-[var(--background)] p-4 rounded-3xl relative"
          style={{
            boxShadow: 'inset 4px 4px 30px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
          }}
        >
          {/* Canvas for the model */}
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <ModelCanvas modelName={model} />
          </div>
          {/* Model name below the canvas */}
          <p className="mt-2 text-white text-center text-lg font-semibold">
            {model.replace('.glb', '')}
          </p>
          {/* Download button */}
          <button
            onClick={() => handleDownload(model)}
            className="absolute bottom-4 right-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600"
            title="Download STL"
          >
            ⬇
          </button>
        </div>
      ))}
    </div>
  );
};



export default ModelDisplay;
