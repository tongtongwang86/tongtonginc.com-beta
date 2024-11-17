import React, { ReactNode, CSSProperties } from 'react';

interface HStackProps {
  children: ReactNode; // Proper type for children
  gap?: number; // Optional number for gap
  align?: CSSProperties['alignItems']; // Matches CSS align-items values
  justify?: CSSProperties['justifyContent']; // Matches CSS justify-content values
  wrap?: boolean; // Whether to wrap items
}

const HStack: React.FC<HStackProps> = ({
  children,
  gap = 10,
  align = 'center',
  justify = 'flex-start',
  wrap = false,
}) => {
  const stackStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gap: `${gap}px`,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap ? 'wrap' : 'nowrap',
  };

  return <div style={stackStyle}>{children}</div>;
};

export default HStack;