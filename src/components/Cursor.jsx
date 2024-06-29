import React, { useEffect, useRef } from 'react';

const SPEED = 0.17;

// Create objects to track mouse position and custom cursor position
const mouse = { x: 0, y: 0 }; // Track current mouse position
const previousMouse = { x: 0, y: 0 }; // Store the previous mouse position
const circle = { x: 0, y: 0 }; // Track the circle position

// Initialize variables to track scaling and rotation
let currentScale = 0; // Track current scale value
let currentAngle = 0; // Track current angle value

function Cursor() {
  const cursor = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      // MOVE
      // Calculate circle movement based on mouse position and smoothing
      circle.x += (mouse.x - circle.x) * SPEED;
      circle.y += (mouse.y - circle.y) * SPEED;
      // Create a transformation string for cursor translation
      const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

      // SQUEEZE
      // 1. Calculate the change in mouse position (deltaMouse)
      const deltaMouseX = mouse.x - previousMouse.x;
      const deltaMouseY = mouse.y - previousMouse.y;
      // Update previous mouse position for the next frame
      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;
      // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
      const mouseVelocity = Math.min(
        Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
        150
      );
      // 3. Convert mouse velocity to a value in the range [0, 0.5]
      const scaleValue = (mouseVelocity / 150) * 0.5;
      // 4. Smoothly update the current scale
      currentScale += (scaleValue - currentScale) * SPEED;
      // 5. Create a transformation string for scaling
      const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

      // ROTATE
      // 1. Calculate the angle using the atan2 function
      const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
      // 2. Check for a threshold to reduce shakiness at low mouse velocity
      if (mouseVelocity > 20) {
        currentAngle = angle;
      }
      // 3. Create a transformation string for rotation
      const rotateTransform = `rotate(${currentAngle}deg)`;

      // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
      if (cursor.current) {
        cursor.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
      }

      // Request the next frame to continue the animation
      window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.cancelAnimationFrame(tick);
    };
  }, []);

  return <div ref={cursor} className="circle"></div>;
}

export default Cursor;
