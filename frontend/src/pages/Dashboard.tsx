import React from 'react';
import { useNavigate } from 'react-router-dom';
import ActivityCard from '../components/shared/ActivityCard';
import { CURRICULUM } from '../components/shared/Curriculum';

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
          SatLab <span className="text-orange-500">Playground</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          An interactive learning environment for exploring the evolution of money, from barter to the Lightning Network.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {CURRICULUM.map((era, index) => (
          <div key={index} className="relative">
            
            <div className="mb-6 border-b-2 border-gray-200 pb-4">
              <h2 className="text-3xl font-bold text-gray-800">{era.era}</h2>
              <p className="text-gray-500 mt-1">{era.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {era.activities.map((act) => (
                <ActivityCard 
                  key={act.id}
                  title={act.title}
                  isLocked={act.isLocked}
                  onClick={() => {
                    if (!act.isLocked && act.path) {
                      navigate(act.path);
                    }
                  }}
                />
              ))}
            </div>
          </div> 
        ))}
      </div>
      <div className="max-w-6xl mx-auto py-16">
        <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Got feedback?</h2>
          <p className="text-gray-500 mt-1 leading-relaxed">
            We'd love to hear your thoughts on the curriculum and activities. If you have any suggestions, ideas,
            or just want to share your experience, it'll help us invaluably to make this project better and more engaging for everyone.
          </p>
          <button className='bg-orange-500 hover:bg-orange-700 py-5 px-10 transition-all duration-300 ease-in-out
            transform hover:-translate-y-1 hover:shadow-lg rounded-full' 
            onClick={() => window.open('mailto:satlab-learning@protonmail.com', '_blank')}>
              <span className='text-white font-bold'>Contact Us</span>
            </button>
        </div>
      </div>
    </div>
  );
}