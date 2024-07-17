import React, { useRef, useState } from 'react';
import { PROJECTS_DATA } from '../../data/projects';
import ProjectsOverviewItem from './ProjectsOverviewItem';
import gsap from 'gsap';

function About() {
  return (
    <div className="pointer-events-auto relative flex h-full w-full flex-col items-center justify-start p-12">
      <div className="grid w-full grid-cols-12 text-xl">
        <div className="col-span-3 col-start-2 flex flex-col">
          <span>San Francisco, CA</span>
          <div>
            <a
              href="mailto:kennethichoi@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="menu__btn--underline"
            >
              kennethichoi@gmail.com
            </a>
          </div>
          <div>
            <a
              href="tel:14082393088"
              target="_blank"
              rel="noreferrer"
              className="menu__btn--underline"
            >
              +1 (408) 239-3088
            </a>
          </div>
        </div>
        <div className="col-span-3 flex flex-col">
          <div>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="menu__btn--underline"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noreferrer"
              className="menu__btn--underline"
            >
              Github
            </a>
          </div>
          <div>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="menu__btn--underline"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="col-span-4 col-start-8 flex flex-col">
          <span className="mb-4 text-2xl font-bold">About</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
