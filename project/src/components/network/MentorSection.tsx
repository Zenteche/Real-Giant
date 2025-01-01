import React from 'react';
import { Card } from '../portfolio/ui/Card';
import { Twitter } from 'lucide-react';

export function MentorSection() {
  return (
    <Card className="mb-12">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80"
            alt="Sensei"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#00FF9D] mb-2">Sensei</h3>
          <p className="text-white text-lg mb-4">Mentor & Crypto Strategy Advisor</p>
          <p className="text-gray-300 mb-4">
            Guiding the next generation of crypto community builders and project managers.
            Expert in strategic growth and community development.
          </p>
        </div>
      </div>
    </Card>
  );
}