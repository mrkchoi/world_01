import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { useStore } from '../../App';

function ProjectTitle({
  projectId,
  title = 'Title',
  description = 'Description',
  start = 0,
  end = 0.04,
  isCardVisible = false,
  setIsCardVisible,
}) {
  const titleRef = useRef(null);
  const scrollProgress = useStore((state) => state.scrollProgress);
  const setActiveProject = useStore((state) => state.setActiveProject);
  const activeProject = useStore((state) => state.activeProject);
  const setActiveCursor = useStore((state) => state.setActiveCursor);

  useEffect(() => {
    // console.log('activeProject: ', activeProject, 'projectId: ', projectId);
    // console.log('activeProject - ProjectTitle: ', activeProject);
    if (activeProject === projectId) {
      const tl = gsap.timeline();
      tl.to(titleRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.set(titleRef.current, {
            visibility: 'hidden',
          });
        },
      });
      return;
    }

    // if (!isCardVisible && scrollProgress >= start && scrollProgress <= end) {
    if (scrollProgress >= start && scrollProgress <= end) {
      gsap.to(titleRef.current, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.5,
      });
    } else {
      gsap.to(titleRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.set(titleRef.current, {
            visibility: 'hidden',
          });
        },
      });
    }
  }, [scrollProgress, isCardVisible, start, end, activeProject, projectId]);

  const handleClick = () => {
    setActiveProject(projectId);
  };

  const handleMouseEnter = () => {
    setActiveCursor(true);
    // set cursor to pointer
    // document.body.style.cursor = 'pointer';
  };

  const handleMouseLeave = () => {
    setActiveCursor(false);
    // reset cursor
    // document.body.style.cursor = 'auto';
  };

  return (
    <>
      <button
        ref={titleRef}
        className="fixed bottom-0 left-[50%] mb-12 flex translate-x-[-50%] flex-col items-center justify-center rounded-lg p-4 text-white opacity-0"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="mb-2 text-center text-6xl font-bold uppercase">
          {title}
        </span>
        <span className="text-md mb-2 text-center font-extralight">
          {description}
        </span>
        {/* <span className="text-center font-medium underline">Discover</span> */}
      </button>
    </>
  );
}

export default ProjectTitle;
