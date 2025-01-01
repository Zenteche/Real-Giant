import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './Card';
import { Project } from '../../../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, metrics, tags, links } = project;

  return (
    <Card>
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-[#00FF9D]/10 text-[#00FF9D] rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="space-y-2 mb-4">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="text-gray-400">
            <span className="capitalize">{key}:</span>{' '}
            <span className="text-white">{value}</span>
          </div>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a href={links.github} className="text-gray-400 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href={links.live} className="text-gray-400 hover:text-white transition-colors">
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </Card>
  );
}