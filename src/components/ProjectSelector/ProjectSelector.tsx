import React from 'react';
import useProjects from '../../hooks/useProjects';

interface Project {
  id: number;
  name: string;
}

interface ProjectSelectorProps {
  accessToken: string|null;
  onProjectSelect: (projectId: number) => void;
}

const ProjectSelector: React.FC<ProjectSelectorProps> = ({ accessToken, onProjectSelect }) => {
  const projects = useProjects(accessToken);

  return (
    <select onChange={(e) => onProjectSelect(Number(e.target.value))}>
      {projects.map((project: Project) => (
        <option key={project.id} value={project.id}>
          {project.name}
        </option>
      ))}
    </select>
  );
};

export default ProjectSelector;