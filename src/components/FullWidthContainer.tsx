import React, { ReactNode, CSSProperties } from 'react';

interface FullWidthContainerProps {
  children: ReactNode; // Content inside the container
  className?: string; // Custom CSS or Tailwind classes
  style?: CSSProperties; // Optional inline styles for extra customization
}

const FullWidthContainer: React.FC<FullWidthContainerProps> = ({
  children,
  className = '',
  style,
}) => {
  const containerStyle: CSSProperties = {
    width: '85dvw',
    marginTop: '3em',
    ...style, // Merge any additional inline styles
  };

  return (
    <div style={containerStyle} className={className}>
      {children}
    </div>
  );
};

export default FullWidthContainer;
