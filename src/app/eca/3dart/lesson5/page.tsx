"use client";
import React, { useState } from 'react';
import * as UI from '@/components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Lesson5 = () => {
 

  const [copied, setCopied] = useState(false);

  return (
    <UI.BodyContainer
      navColor="var(--background)"
      backgroundColor="var(--background2)"
      logoColor="var(--logocolor)"
      hoverShadowColor="var(--logoHover)"
    >
      {/* Add the pulsating CSS animation directly into the component */}
      <style jsx>{`
        @keyframes pulsate {
          0% {
            transform: scale(0.9);
            opacity: 1;
          }
          50% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(0.9);
            opacity: 1;
          }
        }

        .pulsating {
          animation: pulsate 3s ease-in-out infinite;
        }
      `}</style>

      <h1 className="text-6xl font-bold mb-8 center"> --- Lesson 5 PPT --- </h1>
<UI.PDFViewer file='/assets/eca/art/lesson5.pdf'/>

    </UI.BodyContainer>
  );
};

export default Lesson5;
