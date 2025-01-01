import React, { useEffect, useRef, useCallback } from 'react';
import { NetworkMember } from '../../types';
import { ProfileCard } from './ProfileCard';
import { LoadingCard } from './LoadingCard';

interface NetworkGridProps {
  members: NetworkMember[];
  onLoadMore: () => void;
  hasMore: boolean;
  isLoading: boolean;
}

export function NetworkGrid({ members, onLoadMore, hasMore, isLoading }: NetworkGridProps) {
  const observer = useRef<IntersectionObserver>();
  const lastCardRef = useCallback((node: HTMLDivElement) => {
    if (isLoading) return;
    
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        onLoadMore();
      }
    });
    
    if (node) observer.current.observe(node);
  }, [isLoading, hasMore, onLoadMore]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {members.map((member, index) => (
        <div
          key={`member-${member.id}-${index}`}
          ref={index === members.length - 1 ? lastCardRef : undefined}
        >
          <ProfileCard member={member} />
        </div>
      ))}
      {isLoading && Array.from({ length: 4 }).map((_, i) => (
        <LoadingCard key={`loading-${Date.now()}-${i}`} />
      ))}
    </div>
  );
}