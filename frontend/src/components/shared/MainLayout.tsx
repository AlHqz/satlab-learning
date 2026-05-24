import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutDashboard, ChevronLeft, Menu } from 'lucide-react';
import githubLogo from '../../assets/brand-logos/github_logo.svg';
import xLogo from '../../assets/brand-logos/x_logo.png';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    {name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
  ];

  return (
    <div className="min-h-screen flex font-sans">
      <aside 
        className={`bg-slate-900 text-white transition-all duration-300 ease-in-out fixed h-full z-20 flex flex-col ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
          {isSidebarOpen && (
            <span className="font-extrabold text-xl tracking-tight">
              Sat<span className="text-orange-500">Lab</span>
            </span>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`p-2 hover:bg-slate-800 rounded-lg transition-colors ${!isSidebarOpen && 'mx-auto'}`}
          >
            {isSidebarOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-orange-500 text-white shadow-md' 
                    : 'hover:bg-slate-800 text-slate-400 hover:text-white'
                } ${!isSidebarOpen && 'justify-center'}`}
                title={!isSidebarOpen ? item.name : ''}
              >
                <div className={isActive ? 'text-white' : ''}>{item.icon}</div>
                {isSidebarOpen && <span className="font-medium whitespace-nowrap">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
            <a 
                href="https://x.com/satlab_learning" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`group flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ${!isSidebarOpen && 'justify-center'}`}
                title="View on Twitter"
            >
                <img 
                src={xLogo} 
                alt="Twitter" 
                className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity invert" 
                />
                
                {isSidebarOpen && (
                <div className="flex flex-col">
                    <span className="text-sm font-medium">X</span>
                </div>
                )}
            </a>
            <a 
                href="https://github.com/alhqz/satlab-learning" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`group flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ${!isSidebarOpen && 'justify-center'}`}
                title="View on GitHub"
            >
                <img 
                src={githubLogo} 
                alt="GitHub" 
                className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity invert" 
                />
                
                {isSidebarOpen && (
                <div className="flex flex-col">
                    <span className="text-sm font-medium">Open Source</span>
                    <span className="text-xs text-slate-500">v1.0.0-alpha</span>
                </div>
                )}
            </a>
        </div>
      </aside>

      <main 
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        {children}
      </main>
      
    </div>
  );
}