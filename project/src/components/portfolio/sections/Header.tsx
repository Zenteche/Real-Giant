import React from 'react';
import { Twitter, MessageCircle } from 'lucide-react';
import { SocialLink } from '../ui/SocialLink';

export function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="w-48 h-48 rounded-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
          alt="Giant Judge - Project Manager & Community Builder"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold text-white mb-2">Giant Judge</h1>
        <h2 className="text-xl text-[#00FF9D] mb-4">Project Manager & Community Builder</h2>
        
        <div className="flex justify-center md:justify-start gap-4">
          <SocialLink href="https://twitter.com" icon={Twitter} label="Twitter Profile" />
          <SocialLink href="https://t.me/username" icon={MessageCircle} label="Telegram" />
        </div>
      </div>
    </div>
  );
}