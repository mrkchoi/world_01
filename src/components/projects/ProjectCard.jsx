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
    // console.log('activeProject - ProjectCard: ', activeProject);
    if (activeProject === projectId) {
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
      className="fixed right-0 top-0 h-screen rounded-3xl rounded-br-none rounded-tr-none bg-[rgba(0,0,0,.85)] text-white opacity-0 shadow-2xl backdrop-blur-lg"
    >
      <div className="flex h-full w-[30vw] flex-col items-start justify-center p-12">
        <div>
          <button
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mb-8 flex items-center justify-center text-center font-medium"
            onClick={() => setActiveProject(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mr-1 inline-block"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
            <span>Back</span>
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
            className="projectBtn relative flex items-center justify-center rounded-full p-[.85rem] pl-5 pr-5 text-center font-light text-black"
          >
            <span className="menuBtn__textWrapper">
              <span className="menuBtn__text--primary text-sm font-semibold uppercase">
                visit project
              </span>
              <span className="menuBtn__text--secondary text-sm font-semibold uppercase">
                visit project
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
