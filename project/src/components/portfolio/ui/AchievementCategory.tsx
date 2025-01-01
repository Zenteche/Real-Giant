import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from './Card';

interface AchievementCategoryProps {
  type: string;
  icon: LucideIcon;
  items: string[];
}

export function AchievementCategory({ type, icon: Icon, items }: AchievementCategoryProps) {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-5 h-5 text-[#00FF9D]" />
        <h3 className="text-xl font-semibold text-white">{type}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300">• {item}</li>
        ))}
      </ul>
    </Card>
  );
}