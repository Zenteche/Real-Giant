import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <div className="bg-white/5 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-[#00FF9D]" />
          <a href="mailto:contact@giantjudge.com" className="text-gray-300 hover:text-white">
            contact@giantjudge.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-[#00FF9D]" />
          <a href="tel:+2347042661971" className="text-gray-300 hover:text-white">
             +234 704 266 1971
          </a>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-[#00FF9D]" />
          <span className="text-gray-300">San Francisco, CA</span>
        </div>
      </div>
    </div>
  );
}
