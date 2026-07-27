import React, { useState } from 'react';
import ButtonNormal from './assets/mine_btn_off.png';
import ButtonPressed from './assets/mine_btn_on.png';
// This is the component for the interactive button used in the mining activity
interface InteractiveButtonProps {
    onClick: () => void;
    disabled: boolean;
}

export const InteractiveButton: React.FC<InteractiveButtonProps> = ({ onClick, disabled }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressStart = (e: React.TouchEvent | React.MouseEvent) => {
        if (disabled) return;
        e.preventDefault(); 
        setIsPressed(true);
        onClick();
    };

    const handlePressEnd = () => {
        setIsPressed(false);
    };

    return (
        <img 
            src={isPressed ? ButtonPressed : ButtonNormal}
            alt="Mine Button"
            className="w-auto h-auto cursor-pointer select-none touch-none drop-shadow-xl hover:brightness-110 active:brightness-90 transition-all duration-75"
            onMouseDown={handlePressStart}
            onMouseUp={handlePressEnd}
            onMouseLeave={handlePressEnd}
            onTouchStart={handlePressStart}
            onTouchEnd={handlePressEnd}
        />
    );
};