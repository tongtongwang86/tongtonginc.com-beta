'use client';



import { useEffect, useRef ,useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';


interface ModelCanvasProps {
  modelName: string;
}

const ModelCanvas: React.FC<ModelCanvasProps> = ({ modelName }) => {
  const canvasRef = useRef<HTMLDivElement>(null);

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
      rgbeLoader.load('/textures/environment.hdr', (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
        scene.background = null;
      });

      // Load model
      gltfLoader.load(`/models/teachers/${modelName}`, (gltf) => {
        const model = gltf.scene;

        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        scene.add(model);
      });

      // Resize listener
      window.addEventListener('resize', handleResize);
      handleResize(); // Initial sizing

      // Animation loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
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

  return <div ref={canvasRef} className="w-full h-64"></div>;
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
          className="flex flex-col items-center bg-[var(--background)] p-4 rounded-3xl "
          style={{
            boxShadow: 'inset 4px 4px 30px rgba(0, 0, 0, 0.25)', // Add inner shadow
            overflow: 'hidden', // Ensures the canvas respects the rounded corners

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
        </div>
      ))}
    </div>
  );
};


export default ModelDisplay;
