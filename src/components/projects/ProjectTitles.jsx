import React from 'react';
import ProjectTitle from './ProjectTitle';

const TITLE_DATA = [
  {
    id: 1,
    title: 'Title 01',
    descriptionIntro: 'Example description of current project',
    descriptionFull: 'Example description of current project',
    techStack: ['React', 'Three.js', 'GSAP'],
    url: 'https://www.google.com',
    start: 0.15,
    end: 0.19,
  },
  {
    id: 2,
    title: 'Title 02',
    descriptionIntro: 'Example description of current project',
    descriptionFull: 'Example description of current project',
    techStack: ['React', 'Three.js', 'GSAP'],
    url: 'https://www.google.com',
    start: 0.24,
    end: 0.29,
  },
  {
    id: 3,
    title: 'Title 03',
    descriptionIntro: 'Example description of current project',
    descriptionFull: 'Example description of current project',
    techStack: ['React', 'Three.js', 'GSAP'],
    url: 'https://www.google.com',
    start: 0.33,
    end: 0.36,
  },
  {
    id: 4,
    title: 'Title 04',

    descriptionIntro: 'Example description of current project',
    descriptionFull: 'Example description of current project',
    techStack: ['React', 'Three.js', 'GSAP'],
    url: 'https://www.google.com',
    start: 0.41,
    end: 0.46,
  },
];

function ProjectTitles() {
  return (
    <>
      {TITLE_DATA.map((data, index) => (
        <ProjectTitle
          key={index}
          title={data.title}
          description={data.descriptionIntro}
          start={data.start}
          end={data.end}
        />
      ))}
    </>
  );
}

export default ProjectTitles;
