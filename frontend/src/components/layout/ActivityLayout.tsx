import { Link, Outlet } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SatLabLogo from '../../assets/brand-logos/satlab_logo.png';

interface ActivityLayoutProps {
  eraName: string;
  activityTitle: string;
  backUrl: string;
}

export default function ActivityLayout({ eraName, activityTitle, backUrl }: ActivityLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-slate-100 font-sans">
      <header className="h-16 bg-slate-950 border-b border-slate-900 px-6 flex items-center justify-between z-10 select-none">
        <div className="flex items-center space-x-4">
          <Link
            to={backUrl}
            className="flex items-center space-x-2 text-slate-400 hover:text-orange-500 transition-colors text-sm font-medium group"
            title="Back"
          >
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Class</span>
          </Link>
          <span className="text-slate-700">|</span>

          <div className="flex items-center space-x-2">
            <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded font-mono border border-orange-500/20">
              {eraName}
            </span>
            <span className="text-sm font-semibold tracking-wide text-slate-200">
              {activityTitle}
            </span>
          </div>
        </div>
        <div>
            <Link to="/" className="flex items-center space-x-4">
                <h1 className="text-xl font-extrabold text-gray-50">
                  SatLab <span className="text-orange-500">Playground</span>
                </h1>
                <img src={SatLabLogo} alt="SatLab Logo" className="h-10 w-10 drop-shadow-sm drop-shadow-neutral-50/30 bg-slate-100 rounded-xl"/>
            </Link>
        </div>
      </header>

      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
}