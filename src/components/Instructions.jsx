import React from 'react';
import keyboardSvg from '/assets/images/instructions/Instructions-Keyboard.svg';
import mouseSvg from '/assets/images/instructions/Instructions-Mouse.svg';

function Instructions() {
  return (
    <div className="fixed bottom-0 left-0 select-none">
      <div className="relative flex gap-4 p-8 pl-12 text-gray-300">
        <div className="mt-4 flex flex-col items-center justify-center">
          <img src={keyboardSvg} alt="keyboard" className="mb-2 h-10" />
          <span className="text-center text-xs">
            Press these keys on your
            <br />
            keyboard to move around
          </span>
        </div>
        <div className="mt-4 flex flex-col items-center justify-center">
          <img src={mouseSvg} alt="mouse" className="mb-2 h-10" />
          <span className="text-center text-xs">
            Move your mouse
            <br />
            to look around
          </span>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
