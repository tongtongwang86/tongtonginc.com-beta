'use client';
import React, { useEffect, useState } from 'react';

interface ARButtonProps {
  usdzFile: string; // URL of the USDZ file
}

const ARButton: React.FC<ARButtonProps> = ({ usdzFile }) => {
  const [isARKitSupported, setIsARKitSupported] = useState(false);

  useEffect(() => {
    const checkARKitSupport = () => {
      if (typeof navigator !== 'undefined' && typeof document !== 'undefined') {
        const isIOS =
          /iPad|iPhone|iPod/.test(navigator.platform) ||
          (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
        const isARKitCompatible =
          !!navigator.userAgent.match(/AppleWebKit/) &&
          !navigator.userAgent.match(/CriOS/); // Exclude Chrome on iOS

        setIsARKitSupported(isIOS && isARKitCompatible);
      }
    };

    checkARKitSupport();
  }, []);

  // Do not render if ARKit is not supported
  if (!isARKitSupported) {
    return (
      <p
        className=" text-grey pt-2 text-sm inline-flex items-center"
      >
        Please open this page on an iOS device to view in AR
       
      </p>
    );
  }

  return (
    <a
      href={usdzFile}
      rel="ar"
      className=" underline text-blue-400 pt-2 text-lg inline-flex items-center"

    >
      View in AR
      <img 
        src="/assets/revolute/ar.svg" 
        alt="View in AR" 

        style={{ width: '1em', height: '1em' }} 
      />
    </a>
  );
};

export default ARButton;
