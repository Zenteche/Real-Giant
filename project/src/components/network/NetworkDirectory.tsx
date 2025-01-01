import React from 'react';
import { MentorSection } from './MentorSection';
import { NetworkMemberCard } from './NetworkMemberCard';

const networkMembers = [
  {
    name: 'Bentacur',
    twitterUrl: 'https://x.com/Bentacur01?s=09',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Crypt Hakinz',
    twitterUrl: 'https://x.com/Crypt_Hakinz?t=JLFZa3V53la-_dBBt507CQ&s=09',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Crypt Triumphant',
    twitterUrl: 'https://x.com/CryptTriumphant?t=OzHx_T0X7c8nnZe-sSo7NA&s=09',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '99vs1gospel',
    twitterUrl: 'https://x.com/99vs1gospel?t=Xor1GQbIgrWlsvowRBAa7A&s=09',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  },

  {
    name: 'Zenteche',
    twitterUrl: 'https://x.com/zenteche',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  },
  
  {
    name: 'Ayomi Ajayi',
    twitterUrl: 'https://x.com/AyomiAjayi',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
  }
];

export function NetworkDirectory() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Network Directory</h1>
      
      <MentorSection />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {networkMembers.map((member) => (
          <NetworkMemberCard
            key={member.twitterUrl}
            {...member}
          />
        ))}
      </div>
    </div>
  );
}