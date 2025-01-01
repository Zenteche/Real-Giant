import React from 'react';

export function LoadingCard() {
  return (
    <div className="bg-white/5 rounded-lg p-4 animate-pulse">
      <div className="aspect-square mb-4 bg-white/10 rounded-lg" />
      <div className="h-6 bg-white/10 rounded mb-2" />
      <div className="h-4 bg-white/10 rounded w-2/3" />
    </div>
  );
}