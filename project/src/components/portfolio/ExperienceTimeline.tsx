import React from 'react';

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

export function ExperienceTimeline() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map(({ company, title, period, achievements }) => (
          <div key={company} className="bg-white/5 rounded-lg p-6">
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
          </div>
        ))}
      </div>
    </div>
  );
}