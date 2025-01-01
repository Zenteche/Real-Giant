import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, className = '', ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-white hover:text-[#00FF9D] transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}