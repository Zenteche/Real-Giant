import { useState, useEffect } from 'react';
import { NetworkMember } from '../types';

const PAGE_SIZE = 12;

const DEMO_MEMBERS: NetworkMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    position: 'Blockchain Architect',
    company: 'Ethereum Foundation',
    expertise: ['Smart Contracts', 'DeFi', 'Layer 2'],
    testimonial: 'Building the future of decentralized finance',
    imageUrl: 'https://x.com/CryptTriumphant/photo',
    linkedinUrl: 'https://linkedin.com',
    githubUrl: 'https://github.com',
    type: 'mentor'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    position: 'DeFi Protocol Engineer',
    company: 'Aave',
    expertise: ['Solidity', 'Web3.js', 'Protocol Design'],
    testimonial: 'Passionate about decentralized lending protocols',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    linkedinUrl: 'https://linkedin.com',
    githubUrl: 'https://github.com',
    type: 'mentor'
  },
  {
    id: '3',
    name: 'Emily Zhang',
    position: 'Security Researcher',
    company: 'ChainSecurity',
    expertise: ['Smart Contract Auditing', 'Security Analysis'],
    testimonial: 'Securing the blockchain ecosystem',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    linkedinUrl: 'https://linkedin.com',
    githubUrl: 'https://github.com',
    type: 'mentor'
  }
];

export function useNetworkMembers() {
  const [members, setMembers] = useState<NetworkMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const start = (page - 1) * PAGE_SIZE;
    const newMembers = DEMO_MEMBERS.slice(start, start + PAGE_SIZE);
    
    setMembers(prev => [...prev, ...newMembers]);
    setHasMore(newMembers.length === PAGE_SIZE);
    setIsLoading(false);
    setPage(prev => prev + 1);
  };

  return {
    members,
    isLoading,
    loadMore: loadMembers,
    hasMore
  };
}