import React, { useRef, useState } from 'react';
import { PROJECTS_DATA } from '../../data/projects';
import gsap from 'gsap';
import ProjectsOverviewItem from './ProjectsOverviewItem';
import { useGSAP } from '@gsap/react';
import { ACESFilmicToneMapping } from 'three';

const lerp = (start, end, t) => {
  return start * (1 - t) + end * t;
};

let currentMouse = { x: 0, y: 0 };
let targetMouse = { x: 0, y: 0 };

function ProjectsOverview() {
  const main = useRef(null);
  const image = useRef(null);
  const [activeImg, setActiveImg] = useState(PROJECTS_DATA[0].image);
  const [imgOpacity, setImgOpacity] = useState(1);
  const [offset, setOffset] = useState({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
  });

  // useGSAP(
  //   () => {
  //     const xTo = gsap.quickTo(image.current, 'x', { duration: 0.2 });
  //     const yTo = gsap.quickTo(image.current, 'y', { duration: 0.2 });

  //     const handleMouseMove = (e) => {
  //       const translateValueX =
  //         e.clientX - image.current.getBoundingClientRect().width / 2;
  //       const translateValueY =
  //         e.clientY - image.current.getBoundingClientRect().height / 2;

  //       xTo(translateValueX);
  //       yTo(translateValueY);

  //       // use current mouse position and target mouse position to lerp mouse position for use in shader material uniform
  //       targetMouse.x = e.clientX;
  //       targetMouse.y = e.clientY;
  //     };

  //     window.addEventListener('mousemove', handleMouseMove);
  //     return () => window.removeEventListener('mousemove', handleMouseMove);
  //   },
  //   {
  //     scope: main.current,
  //   }
  // );

  const handleMouseEnter = (e) => {
    gsap.to(image.current, { duration: 0.2, opacity: 1 });
  };

  const handleMouseLeave = (e) => {
    gsap.to(image.current, { duration: 0.2, opacity: 0 });
  };

  return (
    <div
      ref={main}
      className="fixed flex h-screen w-full flex-col items-center justify-start bg-[rgb(240,240,240)]"
    >
      <div className="w-full">
        <span className="pl-8 text-[15vw]">projects</span>
      </div>
      <div className="grid w-full grid-rows-12">
        <div
          className="relative col-span-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {PROJECTS_DATA.map((project) => {
            return (
              <ProjectsOverviewItem
                key={project.id}
                project={project}
                setActiveImg={setActiveImg}
              />
            );
          })}
        </div>
        <div ref={image} className="projectsMenu__imgWrapper col-span-4">
          <img
            src={activeImg}
            alt="project preview"
            className="projectsMenu__img"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsOverview;
