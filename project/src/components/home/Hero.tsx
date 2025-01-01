import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#1E2022] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E2022] via-transparent to-[#00FF9D]/10" />
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Expert Project Management &{' '}
          <span className="text-[#00FF9D]">Community Building</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Experienced Project Manager and Community Builder specializing in cryptocurrency projects. 
          Driving engagement through strategic planning, creative design, and community-focused initiatives.
        </p>

        <button
          onClick={() => window.location.hash = 'portfolio'}
          className="inline-flex items-center gap-2 bg-[#00FF9D] text-[#1E2022] px-8 py-3 rounded-lg font-semibold hover:bg-[#00FF9D]/90 transition-colors"
        >
          View Portfolio
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}