import React from 'react';
import { AchievementCategory } from '../ui/AchievementCategory';
import { Award, BookOpen, Mic } from 'lucide-react';

const achievements = [
  {
    type: 'Awards',
    icon: Award,
    items: [
      'ETHGlobal Hackathon Winner 2023',
      'DeFi Innovation Award 2022',
      'Outstanding Contributor - Ethereum Foundation'
    ]
  },
  {
    type: 'Publications',
    icon: BookOpen,
    items: [
      'Layer 2 Scaling Solutions - Ethereum Research',
      'Security Best Practices for DeFi Protocols',
      'Cross-Chain Bridge Architecture Paper'
    ]
  },
  {
    type: 'Speaking',
    icon: Mic,
    items: [
      'ETHDenver 2023 - Keynote Speaker',
      'DevCon VI - Panel Moderator',
      'DeFi Summit 2022 - Technical Workshop'
    ]
  }
];

export function Achievements() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Achievements & Recognition</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <AchievementCategory key={achievement.type} {...achievement} />
        ))}
      </div>
    </div>
  );
}