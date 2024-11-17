
import React, { ReactNode, CSSProperties } from 'react';

interface VerticalStackProps {
  children: ReactNode; // Proper type for children
  gap?: number; // Optional number for gap
  align?: CSSProperties['alignItems']; // Matches CSS align-items values
  justify?: CSSProperties['justifyContent']; // Matches CSS justify-content values
}

const VerticalStack: React.FC<VerticalStackProps> = ({ 
  children, 
  gap = 10, 
  align = 'stretch', 
  justify = 'flex-start' 
}) => {
  const stackStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: `${gap}px`,
    alignItems: align,
    justifyContent: justify,
  };

  return <div style={stackStyle}>{children}</div>;
};

export default VerticalStack;
