import React, { useEffect, useRef } from 'react';
import { useStore } from '../../App';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function EndingOverlay() {
  const isAtEnd = useStore((state) => state.isAtEnd);
  const setIsAtEnd = useStore((state) => state.setIsAtEnd);
  const setIsScrollLocked = useStore((state) => state.setIsScrollLocked);
  const overlay = useRef(null);
  const isMenuOpen = useStore((state) => state.isMenuOpen);
  const isMenuOpenRef = useRef(isMenuOpen);

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  useGSAP(() => {
    if (isAtEnd) {
      gsap.to(overlay.current, {
        opacity: 1,
        duration: 0.25,
        onComplete: () => {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
            setIsAtEnd(false);
          }, 1000);
        },
      });
    } else {
      gsap.to(overlay.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          if (!isMenuOpenRef.current) setIsScrollLocked(false);
        },
      });
    }
  }, [isAtEnd, setIsAtEnd]);

  return (
    <div
      ref={overlay}
      className="pointer-events-none fixed left-0 top-0 z-[9] flex h-screen w-full items-center justify-center bg-[rgba(249,250,250,255)] opacity-0"
    >
      {/* EndingOverlay */}
    </div>
  );
}

export default EndingOverlay;
