import { useState, useEffect } from 'react';
//Sets the activity's area with a scale of 1920*1080
export const useGameScale = (baseWidth = 1920, baseHeight = 1080, headerHeight = 64) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const availableWidth = window.innerWidth;
      const availableHeight = window.innerHeight - headerHeight; 
      
      const scaleX = availableWidth / baseWidth;
      const scaleY = availableHeight / baseHeight;
      
      setScale(Math.min(scaleX, scaleY));
    };
    //For mobile devices
    const handleResize = () => {
      setTimeout(calculateScale, 100);
    };
    //Initial execution
    calculateScale();
    //Listeners for mobile devices
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
    };
  }, [baseWidth, baseHeight, headerHeight]);

  return scale;
};