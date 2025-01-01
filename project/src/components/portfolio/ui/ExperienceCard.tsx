import React from 'react';
import { Card } from './Card';

interface ExperienceCardProps {
  company: string;
  title: string;
  period: string;
  achievements: string[];
}

export function ExperienceCard({ company, title, period, achievements }: ExperienceCardProps) {
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{company}</h3>
          <p className="text-[#00FF9D]">{title}</p>
        </div>
        <p className="text-gray-400">{period}</p>
      </div>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-300">• {achievement}</li>
        ))}
      </ul>
    </Card>
  );
}