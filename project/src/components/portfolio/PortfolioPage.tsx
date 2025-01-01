import React from 'react';
import { Header } from './sections/Header';
import { Summary } from './sections/Summary';
import { Skills } from './sections/Skills';
import { Ambassador } from './sections/Ambassador';

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#1E2022] pt-20">
      <div className="container mx-auto px-4 py-8 space-y-12">
        <Header />
        <Summary />
        <Skills />
        <Ambassador />
      </div>
    </div>
  );
}