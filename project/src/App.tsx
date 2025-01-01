import React, { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Metrics } from './components/home/Metrics';
import { NetworkDirectory } from './components/network/NetworkDirectory';
import { PortfolioPage } from './components/portfolio/PortfolioPage';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'portfolio':
        return <PortfolioPage />;
      case 'network':
        return <NetworkDirectory />;
      default:
        return (
          <>
            <Hero />
            <Metrics />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#1E2022]">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}