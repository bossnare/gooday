import { fetcher } from '@/libs/fetcher';
import { API_URL } from '@/utils/constants';
import Button from './ui/Button';
import { useState } from 'react';
import randomCity from '@/utils/randomCity';
import type { WeatherData } from '@/types/propTypes';
import { roundFormat } from '@/utils/roundFormat';

const Hero = () => {
  // This component fetches weather data for a random city when the button is clicked
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<WeatherData | null>(null);

  const { country, name } = info?.location || {
    country: 'Tssss',
    name: 'Tssss',
  };

  // function for fetching weather data for a random city
  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const data = await fetcher(
        `${API_URL}&q=${randomCity() || 'Antananarivo'}&aqi=no`
      );
      if (!data.length) {
        console.log('Data:', data);
        setInfo(data);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container bg-black flex flex-col items-center justify-center h-screen">
      <div className="prose prose-invert bg-white/10 rounded-md p-4">
        <h1>
          <span className="text-green-600">{name}</span> -{' '}
          <span className="text-gray-400">{country}</span>
        </h1>
        <p className="inline mr-2">{info?.current?.condition?.text}</p>
        <span className="inline-block mr-2">
          <b>~ {roundFormat(info?.current?.temp_c || 0)}°C</b>
        </span>
        <span>
          <b>{roundFormat(info?.current?.temp_f || 0)}°F</b>
        </span>
        <Button
          onClick={fetchWeatherData}
          className={`bg-blue-700 text-white mt-2
            hover:bg-blue-800 focus:bg-blue-900
            focus:outline-none focus:ring-2 focus:ring-blue-500
            focus:ring-offset-2 transition-all duration-300 ease-in-out flex justify-center items-center ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          label={'Button'}
          loading={loading}
        />
      </div>
    </section>
  );
};

export default Hero;
