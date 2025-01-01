import React from 'react';
import { Users, Palette, Award } from 'lucide-react';

const metrics = [
  {
    label: 'Community Members',
    value: '50K+',
    icon: Users,
  },
  {
    label: 'Design Projects',
    value: '100+',
    icon: Palette,
  },
  {
    label: 'Ambassador Roles',
    value: '5+',
    icon: Award,
  },
];

export function Metrics() {
  return (
    <div className="bg-[#1E2022]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center p-6 bg-white/5 rounded-lg"
            >
              <metric.icon className="w-12 h-12 text-[#00FF9D] mb-4" />
              <span className="text-4xl font-bold text-white mb-2">
                {metric.value}
              </span>
              <span className="text-gray-400">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}