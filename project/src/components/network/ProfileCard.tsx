import React from 'react';
import { NetworkMember } from '../../types';
import { Link } from '../layout/Link';

interface ProfileCardProps {
  member: NetworkMember;
}

export function ProfileCard({ member }: ProfileCardProps) {
  return (
    <Link 
      href={`/network/${member.id}`}
      className="block group"
    >
      <div className="bg-white/5 rounded-lg p-4 transition-transform hover:scale-105">
        <div className="aspect-square mb-4 overflow-hidden rounded-lg">
          <img
            src={member.imageUrl}
            alt={`Profile photo of ${member.name}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <h3 className="text-lg font-semibold text-white group-hover:text-[#00FF9D] transition-colors">
          {member.name}
        </h3>
        
        <p className="text-gray-400 text-sm">
          {member.position} at {member.company}
        </p>
      </div>
    </Link>
  );
}