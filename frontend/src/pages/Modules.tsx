import React from 'react';
import { useNavigate } from 'react-router-dom';
import ActivityCard from '../components/shared/ActivityCard.tsx';

const curriculum = [
  {
    era: "Era 1: Prehistory",
    description: "The problem of trust and barter.",
    activities: [
      { id: 1, title: "The Bazaar of Barter", isLocked: true },
      { id: 2, title: "The Material Lab", isLocked: true },
      { id: 3, title: "The Magic Printer", isLocked: true },
    ]
  },
  {
    era: "Era 2: The Discovery",
    description: "Cypherpunk tools and cryptography.",
    activities: [
      { id: 4, title: "The Crusher (Hashes)", isLocked: true },
      { id: 5, title: "The Safe (Keys)", isLocked: true },
      { id: 6, title: "The Needle Finder (PoW)", isLocked: true },
    ]
  },
  {
    era: "Era 3: The Sovereign Network",
    description: "Bitcoin protocol and the P2P consensus.",
    activities: [
      { id: 7, title: "The Immutable Chain", isLocked: true },
      { id: 8, title: "The Bus (Mempool)", isLocked: true },
      { id: 9, title: "Independent Cabins (Nodes)", isLocked: true },
    ]
  },
  {
    era: "Era 4: The Lightning",
    description: "Scalability with the Lightning Network.",
    activities: [
      { id: 10, title: "The Shared Abacus (Channels)", isLocked: true },
      { id: 11, title: "Scales ✈️ (Routing)", isLocked: true },
      { id: 12, title: "Relay Race (HTLCs)", isLocked: true },
    ]
  }
];

export default function Modules() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          SatLab <span className="text-orange-500">Playground</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          An interactive learning environment for exploring the evolution of money, from barter to the Lightning Network.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {curriculum.map((era, index) => (
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
    </div>
  );
}