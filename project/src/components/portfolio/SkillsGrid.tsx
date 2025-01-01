import React from 'react';

const skills = [
  { category: 'Blockchain', items: ['Ethereum', 'Solidity', 'Layer 2', 'Smart Contracts'] },
  { category: 'DeFi', items: ['AMM Design', 'Lending Protocols', 'Yield Farming', 'Tokenomics'] },
  { category: 'Development', items: ['TypeScript', 'React', 'Node.js', 'Web3.js'] },
  { category: 'Tools', items: ['Hardhat', 'OpenZeppelin', 'The Graph', 'MetaMask'] }
];

export function SkillsGrid() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map(({ category, items }) => (
          <div key={category} className="bg-white/5 rounded-lg p-6">
            <h3 className="text-[#00FF9D] font-semibold mb-4">{category}</h3>
            <ul className="space-y-2">
              {items.map(item => (
                <li key={item} className="text-gray-300">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}