import { useState, useEffect } from 'react';
import SimpleFireworks from '../../assets/simple_fw.png';
import BtcFirework from '../../assets/btc_fw.png';

//This is a reusable success animation component to be used in every activity.
export const SuccessFireworks = () => {
  const [step, setStep] = useState<1 | 2>(1);

  useEffect(() => {

    const timer = setTimeout(() => {
      setStep(2);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center z-[100] pointer-events-auto">
      
      <img 
        src={SimpleFireworks} 
        alt="First anim" 
        className={`absolute max-w-[90%] max-h-[90%] object-contain transform-gpu will-change-[opacity] transition-opacity duration-700 ease-in-out ${
          step === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      <img 
        src={BtcFirework} 
        alt="Final anim" 
        className={`absolute max-w-[90%] max-h-[90%] object-contain transform-gpu will-change-[opacity] transition-opacity duration-700 ease-in-out ${
          step === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      
    </div>
  );
};