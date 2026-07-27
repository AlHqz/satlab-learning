import React from 'react';
import { useResultStore } from '../../store/useAcitvityResult';
//Result modal component, used to show the results of an activity.
export const ResultModal: React.FC = () => {
  const { isOpen, status, stars, title, message, stats, onNext, onRetry, closeModal } = useResultStore();

  if (!isOpen) return null;
  //Stars based score feedback
  const renderStars = () => {
    return (
      <div className="flex gap-2 justify-center my-4 text-4xl">
        {[1, 2, 3].map((star) => (
          <span key={star} className={star <= stars ? "text-yellow-400" : "text-neutral-700"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm select-none font-mono animate-fade-in">
      <div className={`w-[500px] border-4 p-8 flex flex-col items-center text-center animate-scale-up ${
        status === 'victory' ? 'border-green-800 rounded-sm bg-green-950/90 text-green-400' : 'border-red-800 rounded-sm bg-red-950/90 text-red-400'
      }`}>
        
        <h2 className="text-2xl font-bold uppercase tracking-widest mb-2 text-white">{title}</h2>
        <p className="opacity-80 mb-2">{message}</p>
        
        {status === 'victory' && renderStars()}

        {stats.length > 0 && (
          <div className="w-full bg-black/50 p-4 border border-current rounded-sm mb-6 flex flex-col gap-2 text-left">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex justify-between border-b border-current border-opacity-30 pb-1 last:border-0">
                <span className="opacity-70">{stat.label}</span>
                <span className="font-bold text-white break-all text-right ml-4">{stat.value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-4 w-full">
          {onRetry && (
            <button 
              onClick={() => { onRetry(); closeModal(); }}
              className="flex-1 py-3 border-2 border-current rounded-sm hover:bg-white/10 transition-colors uppercase tracking-widest font-bold"
            >
              Try Again
            </button>
          )}
          {onNext && status === 'victory' && (
            <button 
              onClick={() => { onNext(); closeModal(); }}
              className="flex-1 py-3 bg-white text-black rounded-sm hover:bg-neutral-300 transition-colors uppercase tracking-widest font-bold"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};