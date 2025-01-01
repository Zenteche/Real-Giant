import React from 'react';
import { ExperienceCard } from '../ui/ExperienceCard';

const experiences = [
  {
    company: 'DeFi Protocol Labs',
    title: 'Lead Blockchain Architect',
    period: '2021 - Present',
    achievements: [
      'Architected a cross-chain bridge protocol securing $500M+ in assets',
      'Led a team of 12 engineers across 3 continents',
      'Reduced gas costs by 40% through optimization'
    ]
  },
  {
    company: 'Ethereum Foundation',
    title: 'Senior Smart Contract Developer',
    period: '2018 - 2021',
    achievements: [
      'Contributed to Layer 2 scaling solutions',
      'Developed security standards for DeFi protocols',
      'Mentored 20+ junior developers'
    ]
  },
  {
    company: 'Blockchain Ventures',
    title: 'Blockchain Developer',
    period: '2016 - 2018',
    achievements: [
      'Built 5 production-ready DApps',
      'Implemented ERC20 and ERC721 token standards',
      'Achieved 100% test coverage for smart contracts'
    ]
  }
];

export function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} {...experience} />
        ))}
      </div>
    </div>
  );
}