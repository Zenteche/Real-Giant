import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="w-48 h-48 rounded-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
          alt="Giant Judge - Blockchain Consultant"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold text-white mb-2">Giant Judge</h1>
        <h2 className="text-xl text-[#00FF9D] mb-4">Senior Blockchain Architect & DeFi Consultant</h2>
        
        <div className="flex justify-center md:justify-start gap-4">
          <a href="https://github.com" className="text-gray-400 hover:text-white">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}