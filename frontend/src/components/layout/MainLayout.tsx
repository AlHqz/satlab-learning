import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Home, LayoutDashboard, ChevronLeft } from 'lucide-react';
import githubLogo from '../../assets/brand-logos/github_logo.svg';
import xLogo from '../../assets/brand-logos/x_logo.png';
import satLabLogo from '../../assets/brand-logos/satlab_logo.png';

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    {name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
  ];

  return (
    // The sidebar
    <div className="min-h-screen flex font-sans">
      <aside 
        className={`bg-slate-950 text-white transition-all duration-300 ease-in-out fixed h-full z-20 flex flex-col ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        {/* For the logo */}
        <div className="h-16 flex items-center justify-between px-2 border-b border-slate-900">
          {isSidebarOpen && (
            <Link to="/" className="flex items-center space-x-3 w-full">
              <img src={satLabLogo} alt="SatLab Logo" className="h-10 w-10 drop-shadow-sm drop-shadow-neutral-950/30 bg-slate-100 rounded-xl"/>
              <h1 className="text-xl font-extrabold text-slate-50 text-shadow-lg text-shadow-neutral-950/50">SatLab</h1>              
            </Link>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`p-2 hover:bg-slate-900 rounded-lg transition-colors ${!isSidebarOpen && 'mx-auto'}`}>
            {isSidebarOpen ? <ChevronLeft size={20} /> : <img src={satLabLogo} alt="SatLab Logo" className="h-10 w-10 drop-shadow-sm drop-shadow-neutral-950/30 bg-slate-100 rounded-xl"/>}
          </button>
        </div>
        {/* Navigation items */}
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
                    : 'hover:bg-slate-900 text-slate-400 hover:text-white'
                } ${!isSidebarOpen && 'justify-center'}`}
                title={!isSidebarOpen ? item.name : ''}
              >
                <div className={isActive ? 'text-white' : ''}>{item.icon}</div>
                {isSidebarOpen && <span className="font-medium whitespace-nowrap">{item.name}</span>}
              </Link>
            );
          })}
        </nav>
          {/* Social Links - gotta make this prettier*/}
        <div className="p-4 border-t border-slate-900">
            <a 
                href="https://x.com/satlab_learning" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`group flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-900 text-slate-400 hover:text-white transition-colors ${!isSidebarOpen && 'justify-center'}`}
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
                className={`group flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-900 text-slate-400 hover:text-white transition-colors ${!isSidebarOpen && 'justify-center'}`}
                title="View on GitHub"
            >
                <img 
                src={githubLogo} 
                alt="GitHub" 
                className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity invert" 
                />
                
                {isSidebarOpen && (
                <div className="flex flex-col">
                    <span className="text-sm font-medium">GitHub</span>
                </div>
                )}
            </a>
        </div>
      </aside>
      {/* The rest of the content */}
      <main 
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        <Outlet />
      </main >
      
    </div>
  );
}