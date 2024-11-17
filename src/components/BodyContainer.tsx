import React, { ReactNode, CSSProperties } from 'react';

interface BodyContainerProps {
  children: ReactNode; // Content inside the container
  className?: string; // Custom CSS or Tailwind classes
  style?: CSSProperties; // Optional inline styles for extra customization
}

const BodyContainer: React.FC<BodyContainerProps> = ({
  children,
  className = '',
  style,
}) => {
  const containerStyle: CSSProperties = {
    background: '#1c1d2c',
    // border: '2px solid red', // Add red outline
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center',
    justifyContent: 'center', // Center horizontally
    minHeight: '100vh',
    justifyItems: 'top',
    ...style, // Merge any additional inline styles
  };

  const dropoffStyle: CSSProperties = {
    width: '100dvw',
    backgroundImage: 'linear-gradient(#5f583700, #1c1d2c 60%, #161925)',
    minHeight: '6em',
    marginTop: '-6em',
  };
  

  return (
    <>

<nav className="fixed top-0 z-10 w-full flex items-start h-15 bg-gradient-to-b from-[#161925] to-[#24253976] backdrop-blur-lg backdrop-brightness-75 group">
  <a 
    href="https://tongtonginc.com/" 
    className="p-6 text-4xl font-bold font-ProfBens text-[#ded2b4] transition duration-200 ease-in-out hover:text-[#ffffff] hover:drop-shadow-[0_0_15px_rgba(222,210,180,0.8)] hover:scale-105"
  >
    Tongtong.inc
  </a>
</nav>





    
    <div style={containerStyle} className={className}>
    <div className='pt-24'></div>
      {children}
      <div className='pt-24'></div>
    </div>
    <div className="dropoff" style={dropoffStyle}></div>

    </>
    
  );
};


export default BodyContainer;

