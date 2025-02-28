"use client";
import React, { useState, useEffect } from 'react';
import * as UI from '@/components';
import Link from 'next/link';

interface FileGroup {
  directory: string;
  files: string[];
}

const ECA: React.FC = () => {
  const [files, setFiles] = useState<FileGroup[]>([]);

  useEffect(() => {
    // Fetch the list of files from the API route
    const fetchFiles = async () => {
      try {
        const response = await fetch('/api/getFiles');
        const data: FileGroup[] = await response.json();
        setFiles(data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <UI.BodyContainer
      navColor="var(--background)"
      backgroundColor="var(--background2)"
      logoColor="var(--logocolor)"
      hoverShadowColor="var(--logoHover)"
    >
      <UI.Wavebg/>
      <div className="max-w-full px-5 py-10">
        <h1 className="text-5xl font-bold mb-12 text-center">Exploring ECA</h1>

        {/* 3D Art Section */}
        <section className="max-w-5xl mx-auto shadow-visionprohome rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">3D Art Making</h2>
          <div className="flex flex-wrap justify-center gap-6 m-5">
            <Link
              className="px-6 py-4 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold text-2xl text-center"
              href="https://sculptgl.tongtonginc.com"
            >
              SculptGL
            </Link>
            {/* <Link
              className="px-6 py-4 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold text-2xl text-center"
              href="/eca/3dart/teachermodel"
            >
              Models
            </Link> */}
            {/* Add other static links as needed */}
          </div>
            

          <div className="flex flex-wrap justify-center gap-6">
            {files.length > 0 ? (
              files.find((fileGroup) => fileGroup.directory === '3dart')?.files.map((file, index) => (
          <Link
            key={index}
            className="px-6 py-4 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold text-2xl text-center"
            href={`/eca/3dart/${file}`}
          >
            {file}
          </Link>
              ))
            ) : (
              <p className="text-center text-xl">Loading 3D Art files...</p>
            )}
          </div>
        </section>

        {/* Electronics Section */}
        <section className="max-w-5xl mx-auto shadow-visionprohome rounded-3xl p-8 mb-16 backdrop-blur-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Electronics Engineering ECA</h2>
          <div className="flex flex-wrap justify-center gap-6 m-5">
            <Link
              className="px-6 py-4 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold text-2xl text-center"
              href="https://www.arduino.cc/en/software"
            >
              Arduino IDE Download
            </Link>
            
       
            {/* Add other static links as needed */}
          </div>
      


          <div className="flex flex-wrap justify-center gap-6">
            {files.length > 0 ? (
              files.find((fileGroup) => fileGroup.directory === 'electronics')?.files.map((file, index) => (
                <Link
                  key={index}
                  className="px-6 py-4 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold text-2xl text-center"
                  href={`/eca/electronics/${file}`}
                >
                  {file}
                </Link>
              ))
            ) : (
              <p className="text-center text-xl">Loading Electronics files...</p>
            )}
          </div>
        </section>
      </div>
    </UI.BodyContainer>
  );
};

export default ECA;
