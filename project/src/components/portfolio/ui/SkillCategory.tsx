import React from 'react';
import { Card } from './Card';

interface SkillCategoryProps {
  category: string;
  items: string[];
}

export function SkillCategory({ category, items }: SkillCategoryProps) {
  return (
    <Card>
      <h3 className="text-[#00FF9D] font-semibold mb-4">{category}</h3>
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item} className="text-gray-300">{item}</li>
        ))}
      </ul>
    </Card>
  );
}