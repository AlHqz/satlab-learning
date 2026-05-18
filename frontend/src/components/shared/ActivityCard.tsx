import React from 'react';

interface ActivityCardProps {
  title: string;
  isLocked: boolean;
  onClick: () => void;
}

export default function ActivityCard({ title, isLocked, onClick }: ActivityCardProps) {
  if (isLocked) {
    return (
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50 flex flex-col items-center justify-center opacity-75">
        <h3 className="text-lg font-medium text-gray-400 mb-3 text-center">{title}</h3>
        <span className="text-[10px] bg-gray-200 text-gray-500 px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-inner">
          🔒 Work In Progress
        </span>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className="border-2 border-orange-400 rounded-xl p-6 bg-white cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:border-orange-500 transition-all duration-300 group flex flex-col items-center justify-center"
    >
      <h3 className="text-lg font-bold text-gray-800 mb-3 text-center group-hover:text-orange-600 transition-colors">
        {title}
      </h3>
      <span className="text-[10px] bg-orange-100 text-orange-600 px-3 py-1 rounded-full uppercase tracking-wider font-bold shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
        ⭐ Active Module
      </span>
    </div>
  );
}