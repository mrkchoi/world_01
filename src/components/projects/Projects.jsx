import React, { useEffect, useRef } from 'react';
import Project from './Project';
import { useStore } from '../../App';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Title 01',
    descriptionIntro: 'Example description of current project',
    descriptionFull:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tortor eget enim tristique vehicula. Etiam suscipit ultrices felis, et tempor dui cursus nec. In hac habitasse platea dictumst. Nam ut ornare libero, sit amet suscipit diam. Pellentesque a leo rhoncus, fringilla metus vel, ullamcorper ex.',
    techStack: ['React', 'Three.js', 'GSAP'],
    url: 'https://www.google.com',
    start: 0.15,
    end: 0.19,
  },
  {
    id: 2,
    title: 'Title 02',
    descriptionIntro: 'Example description of current project',
    descriptionFull:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tortor eget enim tristique vehicula. Etiam suscipit ultrices felis, et tempor dui cursus nec. In hac habitasse platea dictumst. Nam ut ornare libero, sit amet suscipit diam. Pellentesque a leo rhoncus, fringilla metus vel, ullamcorper ex.',
    techStack: ['React', 'Three.js', 'GSAP'],
    url: 'https://www.google.com',
    start: 0.24,
    end: 0.29,
  },
  {
    id: 3,
    title: 'Title 03',
    descriptionIntro: 'Example description of current project',
    descriptionFull:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tortor eget enim tristique vehicula. Etiam suscipit ultrices felis, et tempor dui cursus nec. In hac habitasse platea dictumst. Nam ut ornare libero, sit amet suscipit diam. Pellentesque a leo rhoncus, fringilla metus vel, ullamcorper ex.',
    techStack: ['React', 'Three.js', 'GSAP'],
    url: 'https://www.google.com',
    start: 0.33,
    end: 0.36,
  },
  {
    id: 4,
    title: 'Title 04',

    descriptionIntro: 'Example description of current project',
    descriptionFull:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tortor eget enim tristique vehicula. Etiam suscipit ultrices felis, et tempor dui cursus nec. In hac habitasse platea dictumst. Nam ut ornare libero, sit amet suscipit diam. Pellentesque a leo rhoncus, fringilla metus vel, ullamcorper ex.',
    techStack: ['React', 'Three.js', 'GSAP'],
    url: 'https://www.google.com',
    start: 0.41,
    end: 0.46,
  },
];

function Projects() {
  const projects = useRef(null);
  const activeProject = useStore((state) => state.activeProject);
  const setActiveProject = useStore((state) => state.setActiveProject);

  // useEffect(() => {
  //   const handleClick = (e) => {
  //     e.stopPropagation();
  //     // console.log(e.target);
  //     // if click outside of card, close card by setting activeProject to null
  //     // console.log('activeProject: ', activeProject, 'projectId: ', projectId);
  //     // console.log('activeProject: ', activeProject);
  //     // console.log('projects.current: ', projects.current);
  //     // console.log(
  //     //   '!projects.current.contains(e.target): ',
  //     //   !projects.current.contains(e.target)
  //     // );
  //     if (projects.current && !projects.current.contains(e.target)) {
  //       // console.log('click outside of card');
  //       setActiveProject(null);
  //     }
  //   };

  //   window.addEventListener('click', handleClick);

  //   return () => {
  //     window.removeEventListener('click', handleClick);
  //   };
  // }, []);

  // useEffect(() => {
  //   // console.log('activeProject: ', activeProject);
  //   if (activeProject) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, [activeProject]);

  return (
    <div ref={projects}>
      {PROJECTS_DATA.map((data, idx) => (
        <Project
          key={idx}
          projectId={data.id}
          title={data.title}
          descriptionIntro={data.descriptionIntro}
          descriptionFull={data.descriptionFull}
          techStack={data.techStack}
          url={data.url}
          start={data.start}
          end={data.end}
        />
      ))}
    </div>
  );
}

export default Projects;
