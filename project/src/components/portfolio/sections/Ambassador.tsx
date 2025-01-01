import React from 'react';
import { ExternalLink, Twitter } from 'lucide-react';

interface AmbassadorRole {
  project: string;
  twitter: string;
  website: string;
}

const ambassadorRoles: AmbassadorRole[] = [
  {
    project: 'Based Sharon ($SHARE)',
    twitter: 'x.com/basedsharon__',
    website: 'basedsharon.com'
  },
  {
    project: 'Tetherball Coin ($TBALL)',
    twitter: 'x.com/TetherballCoin',
    website: 'tetherballcom.com'
  }
];

export function Ambassador() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Ambassador Roles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ambassadorRoles.map((role) => (
          <div key={role.project} className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">{role.project}</h3>
            <div className="space-y-2">
              <a 
                href={`https://${role.twitter}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#00FF9D] transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>{role.twitter}</span>
              </a>
              <a 
                href={`https://${role.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#00FF9D] transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>{role.website}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}