import type { HistoryData } from '@/types/data/history';

export const API_KEY = import.meta.env.VITE_API_KEY;
export const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

// localStorage
export const history: HistoryData[] = JSON.parse(
  localStorage.getItem('history') || '[]'
);
export const isHistory = history.length > 0;
