import { create } from 'zustand';
//This store is used to instance and manage the state of the result modal after finishing any activity.
export type ResultStatus = 'victory' | 'defeat';

export interface StatItem {
  label: string;
  value: string | number;
}

interface ResultState {
  isOpen: boolean;
  status: ResultStatus;
  stars: number;
  title: string;
  message: string;
  stats: StatItem[];
  onNext: (() => void) | null;
  onRetry: (() => void) | null;
  
  openModal: (data: Omit<ResultState, 'isOpen' | 'openModal' | 'closeModal'>) => void;
  closeModal: () => void;
}

export const useResultStore = create<ResultState>((set) => ({
  isOpen: false,
  status: 'victory',
  stars: 0,
  title: '',
  message: '',
  stats: [],
  onNext: null,
  onRetry: null,

  openModal: (data) => set({ isOpen: true, ...data }),
  closeModal: () => set({ 
    isOpen: false, 
    onNext: null, 
    onRetry: null 
  }),
}));