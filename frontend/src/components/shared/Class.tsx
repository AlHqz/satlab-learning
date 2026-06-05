import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import  { activitiesData }  from './ActivitiesData';

export default function Class() {
    const navigate = useNavigate();
    
    const { eraId, activityId } = useParams();
    const activityKey = `${eraId}-${activityId}`;
    const activityData = activitiesData[activityKey as keyof typeof activitiesData];

    if (!activityData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white font-mono">
                <h2>404 - Module Not Found</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-mono bg-zinc-900 text-zinc-300">
            <div className="max-w-5xl ml-12 mx-left">
                <div className="space-y-6 border-b border-zinc-800 pb-6 mb-12">
                    <Link to="/dashboard" className="flex items-center space-x-2 text-slate-400 hover:text-orange-500 transition-colors text-sm font-medium group" title="Back">
                        <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Dashboard</span>
                    </Link>
                    <h1 className="text-4xl font-extrabold tracking-widest text-white uppercase mb-2">
                        SatLab <span className="text-orange-500">Terminal</span>
                    </h1>
                </div>
                <div className="space-y-8 mb-12">
                    <div className="bg-zinc-900 border border-zinc-800 p-6 shadow-lg border-l-4 border-l-orange-500 relative overflow-hidden">
                        <h2 className="text-xl font-bold text-orange-400 uppercase tracking-wide mb-3 flex items-center">{activityData.title}</h2>
                        <p className="text-zinc-400 leading-relaxed whitespace-pre-wrap">{activityData.intro}</p>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-6 shadow-lg border-l-4 border-l-orange-500 relative overflow-hidden">
                        <h2 className="text-xl font-bold text-orange-400 uppercase tracking-wide mb-3 flex items-center">{activityData.subtitle}</h2>
                        <p className="text-zinc-400 leading-relaxed whitespace-pre-wrap">{activityData.description}</p>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-6 shadow-lg border-l-4 border-l-orange-500 relative overflow-hidden">
                        <h2 className="text-xl font-bold text-orange-400 uppercase tracking-wide mb-3 flex items-center">{activityData.tutorial}</h2>
                        <ul className="text-zinc-400 leading-relaxed list-disc list-inside">
                            {activityData.steps.map((step: string) => <li key={step}>{step}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="flex justify-start border-t border-zinc-800 pt-8">
                    <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-zinc-950 transition-all 
                    duration-200 bg-orange-500 hover:bg-transparent border-2 border-orange-500 hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] 
                    uppercase tracking-widest" onClick={() => navigate(`${activityData.nextPath}`)}>
                        <span className="mr-3 font-black group-hover:animate-ping">_</span>
                        Initialize Simulation
                    </button>
                </div>
            </div>
        </div>
    )
}