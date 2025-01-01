import React from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import { Project } from '../../../types';

const projects: Project[] = [
  {
    id: 'community',
    name: 'Community Growth Initiative',
    description: 'Led a successful community growth campaign resulting in 200% increase in engagement',
    metrics: { members: '50K+', engagement: '85%' },
    tags: ['Community Building', 'Social Media', 'Events'],
    links: { github: '#', live: '#' }
  }
];

export function ProjectsShowcase() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Notable Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}