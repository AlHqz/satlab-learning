import React from 'react';
import { useNavigate } from 'react-router-dom';
import GitHubLogo from '../assets/brand-logos/github_logo.svg';
import XLogo from '../assets/brand-logos/x_logo.png';
import GeyserLogo from '../assets/brand-logos/geyser_logo.png';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  colorClass: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/AlHqz/satlab-learning',
    icon: <img src={GitHubLogo} alt="GitHub" className="w-6 h-6" />,
    colorClass: 'hover:bg-gray-200 dark:hover:bg-gray-800',
  },
  {
    name: 'Twitter / X',
    url: 'https://x.com/satlab_learning',
    icon: <img src={XLogo} alt="Twitter" className="w-6 h-6" />,
    colorClass: 'hover:bg-sky-50 dark:hover:bg-sky-900/30',
  },
  {
    name: 'GeyserFund',
    url: 'https://geyser.fund/hero/satlablearning',
    icon: <img src={GeyserLogo} alt="GeyserFund" className="w-20 h-8" />,
    colorClass: 'hover:bg-green-50 dark:hover:bg-green-900/30',
  }
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
          SatLab <span className="text-orange-500">Playground</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          An interactive learning environment for exploring the evolution of money, from barter to the Lightning Network.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Welcome!</h2>
          <p className="text-gray-500 mt-1 leading-relaxed">
            First of all, thank you for taking your time to take a look at this project!
            This is a work in progress that aims to bridge the gap between <span className='font-bold'>technical education</span> and the general public. More specifically,
            it is aimed towards the <span className='font-bold'>younger public</span> who are the future of our society and should have all the tools to learn and understand money and its
            problems and how <span className='font-bold'>Bitcoin</span> works to solve them, and the best part, in a <span className='font-bold'>fun and engaging way</span>.           
          </p>
          <p className="text-gray-500 mt-1 leading-relaxed">
            With your valuable help, this will grow into a fully scalable and modular <span className='font-bold'>open-source learning platform</span> for Bitcoin.
          </p>
          <p className="text-gray-500 mt-1 leading-relaxed">
            If you want to know more about the project, contribute, or just want to say hi, you can find more info on <span className='font-bold'>X</span> and <span className='font-bold'>GeyserFund</span>. And if you want to take a look at the code, feel free to check our repo on <span className='font-bold'>GitHub</span>.
          </p>
          <button 
                  className='bg-orange-500 hover:bg-orange-700 mt-6 mb-6 py-5 px-10 transition-all duration-300 ease-in-out
                  transform hover:-translate-y-1 hover:shadow-lg rounded-full' 
                  onClick={() => navigate('/dashboard')}>
            <span className='text-white font-bold'>Start Exploring</span>
          </button>
          <div className="flex flex-wrap gap-4 justify-center items-center p-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={`
                  p-3 rounded-full text-gray-500 transition-all duration-300 ease-in-out
                  transform hover:-translate-y-1 hover:shadow-lg
                  ${link.colorClass}
                `}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}