import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1E2022]/95 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavigate('home')} 
            className="text-[#00FF9D] text-xl font-bold"
          >
            Giant Judge
          </button>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNavigate('home')} className={`text-white hover:text-[#00FF9D] transition-colors ${currentPage === 'home' ? 'text-[#00FF9D]' : ''}`}>
              Home
            </button>
            <button onClick={() => handleNavigate('portfolio')} className={`text-white hover:text-[#00FF9D] transition-colors ${currentPage === 'portfolio' ? 'text-[#00FF9D]' : ''}`}>
              Portfolio
            </button>
            <button onClick={() => handleNavigate('network')} className={`text-white hover:text-[#00FF9D] transition-colors ${currentPage === 'network' ? 'text-[#00FF9D]' : ''}`}>
              Network
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <button onClick={() => handleNavigate('home')} className="block py-2 text-white hover:text-[#00FF9D] w-full text-left">
              Home
            </button>
            <button onClick={() => handleNavigate('portfolio')} className="block py-2 text-white hover:text-[#00FF9D] w-full text-left">
              Portfolio
            </button>
            <button onClick={() => handleNavigate('network')} className="block py-2 text-white hover:text-[#00FF9D] w-full text-left">
              Network
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}