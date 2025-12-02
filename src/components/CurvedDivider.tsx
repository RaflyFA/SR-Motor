import React from 'react';

interface CurvedDividerProps {
  position: 'top' | 'bottom'; 
  color: string;              
}

const CurvedDivider: React.FC<CurvedDividerProps> = ({ position, color }) => {
  const rotationClass = position === 'top' ? 'scale-y-[-1]' : '';

  return (
    <div className={`relative w-full overflow-hidden leading-[0] -mt-[20px]`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320" 
        // Kita gabungkan class dasar dengan class rotasi yang dinamis
        className={`w-full h-auto block ${rotationClass}`} 
      >
        <path 
          fill={color} // Warna sekarang diambil dari props, bukan hardcode
          fillOpacity="1" 
          d="M0,160L80,138.7C160,117,320,75,480,74.7C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        >
        </path>
      </svg>
    </div>
  );
};

export default CurvedDivider;