import React, { useEffect, useRef, useState } from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectCard from './ProjectCard';

function Project({
  projectId,
  title,
  descriptionIntro,
  descriptionFull,
  techStack,
  url,
  start,
  end,
}) {
  const [isCardVisible, setIsCardVisible] = useState(false);

  return (
    <div>
      <ProjectTitle
        projectId={projectId}
        title={title}
        description={descriptionIntro}
        start={start}
        end={end}
        isCardVisible={isCardVisible}
        setIsCardVisible={setIsCardVisible}
      />
      <ProjectCard
        projectId={projectId}
        title={title}
        descriptionIntro={descriptionIntro}
        descriptionFull={descriptionFull}
        techStack={techStack}
        url={url}
        isCardVisible={isCardVisible}
        setIsCardVisible={setIsCardVisible}
      />
    </div>
  );
}

export default Project;
