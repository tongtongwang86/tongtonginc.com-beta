import React, { ReactNode, CSSProperties } from 'react';

interface TextContainerProps {
  children: ReactNode; // Content inside the container
  maxWidth?: string; // Maximum width (default: "700px")
  width?: string; // Width (default: "85dvw")
  style?: CSSProperties; // Optional additional styles
}

const TextContainer: React.FC<TextContainerProps> = ({
  children,
  maxWidth = '700px', // Default max width
  width = '85dvw', // Default width
  style,
}) => {
  const containerStyle: CSSProperties = {
    maxWidth: maxWidth,
    width: width,
    margin: '0 auto', // Center align horizontally
    ...style, // Merge additional styles if provided
  };

  return <div style={containerStyle}>{children}</div>;
};

export default TextContainer;
