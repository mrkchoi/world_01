import React, { useRef, useState } from 'react';
import { PROJECTS_DATA } from '../../data/projects';
import ProjectsOverviewItem from './ProjectsOverviewItem';
import gsap from 'gsap';
import logoDefaultImg from '/assets/images/projects/00_logo.webp';

function ProjectsOverview() {
  const image = useRef(null);
  // const [activeImg, setActiveImg] = useState(PROJECTS_DATA[0].image);
  const [activeImg, setActiveImg] = useState(logoDefaultImg);

  const handleMouseEnter = (e) => {
    // gsap.to(image.current, { duration: 0.2, opacity: 1 });
  };

  const handleMouseLeave = (e) => {
    // gsap.to(image.current, { duration: 0.2, opacity: 0 });
    setActiveImg(logoDefaultImg);
  };

  return (
    <div className="grid w-full grid-cols-12">
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
      <div
        ref={image}
        className="projectsMenu__imgWrapper col-span-4 flex items-center justify-center self-center"
      >
        <img
          src={activeImg}
          alt="project preview"
          className="projectsMenu__img max-w-[90%] rounded-xl"
        />
      </div>
    </div>
  );
}

export default ProjectsOverview;
