import React from 'react';
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
        {achievements.map(({ type, icon: Icon, items }) => (
          <div key={type} className="bg-white/5 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Icon className="w-5 h-5 text-[#00FF9D]" />
              <h3 className="text-xl font-semibold text-white">{type}</h3>
            </div>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index} className="text-gray-300">• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}