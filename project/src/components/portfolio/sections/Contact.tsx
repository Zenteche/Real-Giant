import React from 'react';
import { ContactInfo } from '../ui/ContactInfo';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    content: 'contact@giantjudge.com',
    href: 'mailto:contact@giantjudge.com'
  },
  {
    icon: Phone,
    content: '+1 (234) 567-890',
    href: 'tel:+1234567890'
  },
  {
    icon: MapPin,
    content: 'San Francisco, CA'
  }
];

export function Contact() {
  return (
    <div className="bg-white/5 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactDetails.map((detail, index) => (
          <ContactInfo key={index} {...detail} />
        ))}
      </div>
    </div>
  );
}