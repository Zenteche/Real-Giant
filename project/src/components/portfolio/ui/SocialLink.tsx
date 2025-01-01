import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a 
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}