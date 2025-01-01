import React from 'react';
import { SkillCategory } from '../ui/SkillCategory';

const skills = [
  { category: 'Project Manager', items: ['Community Management', 'Event Planning', 'Team Leadership', 'Strategic Planning'] },
  { category: 'Graphics Designer', items: ['Adobe Photoshop', 'Illustrator', 'Canva', 'Social Media Design'] },
  { category: 'Ambassador', items: ['Community Building', 'Content Creation', 'Brand Representation', 'Network Growth'] },
  { category: 'Crypto Websites', items: ['CoinGecko', 'CoinMarketCap', 'X', 'Telegram'] }
];

export function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCategory key={skill.category} {...skill} />
        ))}
      </div>
    </div>
  );
}