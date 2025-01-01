import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoProps {
  icon: LucideIcon;
  content: string;
  href?: string;
}

export function ContactInfo({ icon: Icon, content, href }: ContactInfoProps) {
  const Component = href ? 'a' : 'div';
  
  return (
    <Component 
      href={href}
      className={`flex items-center gap-3 ${href ? 'text-gray-300 hover:text-white transition-colors' : 'text-gray-300'}`}
    >
      <Icon className="w-5 h-5 text-[#00FF9D]" />
      <span>{content}</span>
    </Component>
  );
}