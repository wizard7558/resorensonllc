import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="min-h-screen w-full relative overflow-hidden">
       {/* Global Technical Grid - Fixed to viewport for consistent feel */}
       <div className="fixed inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.15] pointer-events-none z-0" />
       
       {/* Scanline Effect - Subtle movement */}
       <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
          <div className="w-full h-[50vh] bg-gradient-to-b from-transparent via-black to-transparent animate-scan" />
       </div>

       {/* Main Content Area with Transition */}
       <main className="relative z-10 animate-slide-up">
          {children}
       </main>
    </div>
  );
};

export default PageWrapper;
