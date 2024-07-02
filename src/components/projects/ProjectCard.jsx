import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useStore } from '../../App';

function ProjectCard({
  projectId,
  title = 'Title',
  descriptionIntro = 'Description',
  descriptionFull = 'Description',
  techStack = ['React', 'Three.js', 'GSAP'],
  url = 'https://www.google.com',
  isCardVisible = false,
  setIsCardVisible,
}) {
  const cardRef = useRef(null);
  const activeProject = useStore((state) => state.activeProject);
  const setActiveProject = useStore((state) => state.setActiveProject);

  useEffect(() => {
    if (activeProject === projectId) {
      // console.log('activeProject: ', activeProject);
      gsap.to(cardRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.inOut',
      });
    } else {
      gsap.to(cardRef.current, {
        opacity: 0,
        x: '100%',
        duration: 0.5,
        ease: 'power3.inOut',
      });
    }
  }, [activeProject, isCardVisible, projectId]);

  return (
    <div
      ref={cardRef}
      className="fixed right-0 top-0 h-screen bg-[rgba(255,255,255,.97)] opacity-0"
    >
      <div className="flex h-full w-[30vw] flex-col items-start justify-center p-8">
        <div>
          <button
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mb-8 text-center font-medium underline"
            onClick={() => setActiveProject(null)}
          >
            {'< '}Back
          </button>
        </div>
        <div className="flex flex-col items-start justify-center text-justify">
          <span className="mb-2 text-6xl font-bold uppercase">{title}</span>
          <span className="text-md mb-8 font-extralight">
            {descriptionIntro}
          </span>
          <span className="text-md mb-8 font-extralight">
            {descriptionFull}
          </span>

          <span className="mb-12 font-extralight">
            Technologies: {techStack.join(', ')}
          </span>
        </div>
        <div>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="bg-black p-3 pl-6 pr-6 text-center font-medium text-white"
          >
            Visit project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
