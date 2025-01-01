import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Cross-Chain Bridge Protocol',
    description: 'Secure bridge for asset transfer between Ethereum and Layer 2 networks',
    metrics: { tvl: '$500M+', transactions: '1M+' },
    tags: ['Solidity', 'TypeScript', 'The Graph'],
    links: { github: '#', live: '#' }
  },
  {
    title: 'DeFi Lending Platform',
    description: 'Automated lending protocol with innovative liquidation mechanism',
    metrics: { tvl: '$200M+', users: '50K+' },
    tags: ['Smart Contracts', 'React', 'Web3'],
    links: { github: '#', live: '#' }
  },
  {
    title: 'NFT Marketplace',
    description: 'Decentralized marketplace for NFT trading with low fees',
    metrics: { volume: '$10M+', collections: '500+' },
    tags: ['ERC721', 'Next.js', 'IPFS'],
    links: { github: '#', live: '#' }
  }
];

export function ProjectsShowcase() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Notable Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ title, description, metrics, tags, links }) => (
          <div key={title} className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-[#00FF9D]/10 text-[#00FF9D] rounded text-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="space-y-2 mb-4">
              {Object.entries(metrics).map(([key, value]) => (
                <div key={key} className="text-gray-400">
                  <span className="capitalize">{key}:</span>{' '}
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a href={links.github} className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href={links.live} className="text-gray-400 hover:text-white">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}