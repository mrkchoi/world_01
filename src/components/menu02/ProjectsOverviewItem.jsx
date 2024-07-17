import React, { useRef } from 'react';
import gsap from 'gsap';

function ProjectsOverviewItem({ project, setActiveImg }) {
  const item = useRef(null);
  const background = useRef(null);

  const handleMouseEnter = (e) => {
    setActiveImg(project.image);
    // depending on whether user enters from top or bottom, animate background in or out
    const bounds = item.current.getBoundingClientRect();
    const mouseY = e.clientY;
    const top = bounds.top;
    const bottom = bounds.bottom;
    const middle = top + (bottom - top) / 2;
    const isTop = mouseY < middle;
    const isBottom = mouseY > middle;

    if (isTop) {
      gsap.set(background.current, {
        y: '-100%',
      });
      gsap.to(background.current, {
        duration: 0.2,
        // ease: "akaruEase",
        y: 0,
      });
    } else if (isBottom) {
      gsap.set(background.current, {
        y: '100%',
      });
      gsap.to(background.current, {
        duration: 0.2,
        // ease: "akaruEase",
        y: 0,
      });
    }
  };

  const handleMouseLeave = (e) => {
    // depending on whether user exits from top or bottom, animate background in or out
    const bounds = item.current.getBoundingClientRect();
    const mouseY = e.clientY;
    const top = bounds.top;
    const bottom = bounds.bottom;
    const middle = top + (bottom - top) / 2;
    const isTop = mouseY < middle;
    const isBottom = mouseY > middle;

    if (isTop) {
      gsap.to(background.current, {
        duration: 0.2,
        // ease: "akaruEase",
        y: '-100%',
      });
    } else if (isBottom) {
      gsap.to(background.current, {
        duration: 0.2,
        // ease: "akaruEase",
        y: '100%',
      });
    }
  };

  return (
    <button
      ref={item}
      key={project.id}
      className="projectMenuItem relative z-[1] grid w-full grid-cols-12 items-center overflow-hidden p-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={background}
        // className="projectMenuItem__background pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full will-change-transform"
        className="projectMenuItem__background pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full translate-y-[-100%] will-change-transform"
      ></div>
      <span className="projectMenuItem__text relative z-[1] col-span-4 block text-left text-2xl font-medium uppercase">
        {project.title}
      </span>
      <span className="projectMenuItem__text relative z-[1] col-span-4 block text-left">
        {project.descriptionIntro}
      </span>
      <span className="relative z-[1] col-span-4 flex items-center justify-self-end text-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="projectMenuItem__icon"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
          />
        </svg>
      </span>
    </button>
  );
}

export default ProjectsOverviewItem;
