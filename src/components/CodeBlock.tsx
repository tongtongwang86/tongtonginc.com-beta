"use client";
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Define a type for the props that the CodeBlock component will receive
interface CodeBlockProps {
  code: string; // The code to display
  language: string; // The language for the syntax highlighter (e.g., "cpp")
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    // Reset back to "Copy Code" after 3 seconds
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="relative w-full max-w-4xl px-6 mx-auto my-6">
      {/* Code Block */}
    <div className='w-full top-20 flex flex-row-reverse sticky'>
      <CopyToClipboard text={code} onCopy={handleCopy} >
        <button
          className="px-7 py-3 m-2 bg-[#72727227] backdrop-blur-md shadow-visionpro text-sm rounded-xl hover:bg-[#ffffff27] transition z-10 mt-4 bg-blend-lighten"
        >
          {copied ? <span className="text-green-300">Copied!</span> : <p className=" text-stone-400  ">Copy Code</p>}
        </button>
      </CopyToClipboard>
      </div>

      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        showLineNumbers
        wrapLongLines
        className="rounded-2xl"
      >
        {code}
      </SyntaxHighlighter>

      {/* Copy Button */}
  
    </div>
  );
};

export default CodeBlock;
