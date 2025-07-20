import type { WeatherData } from '@/types/data/api';

export const setHistory = (
  data: WeatherData | null,
  error: string,
  searchTerm: string,
  name: string,
  country: string,
  icon: string
) => {
  if (!error && data && !data?.error) {
    const history = JSON.parse(localStorage.getItem('history') || '[]');
    const updatedHistory = [
      {
        id: Date.now(),
        search: searchTerm,
        city: data && name,
        country: data && country,
        result: data ? true : false,
        icon: data && icon,
      },
      ...history,
    ];

    localStorage.setItem('history', JSON.stringify(updatedHistory));
    console.log('local:', JSON.stringify(localStorage.getItem('history')));
    console.log(data);
  } else {
    return;
  }
};
