import React from 'react';
import { Twitter } from 'lucide-react';
import { Card } from '../portfolio/ui/Card';

interface NetworkMemberCardProps {
  name: string;
  twitterUrl: string;
  imageUrl: string;
}

export function NetworkMemberCard({ name, twitterUrl, imageUrl }: NetworkMemberCardProps) {
  return (
    <Card>
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-white font-semibold mb-2">{name}</h3>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-[#00FF9D] transition-colors"
        >
          <Twitter className="w-5 h-5" />
          <span>Follow on X</span>
        </a>
      </div>
    </Card>
  );
}