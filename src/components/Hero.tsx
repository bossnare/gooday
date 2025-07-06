import { fetcher } from '@/libs/fetcher';
import { API_URL } from '@/utils/constants';
import Button from './ui/Button';
import { useState } from 'react';

const Hero = () => {
  // This component fetches weather data for Antananarivo when the button is clicked
  const [loading, setLoading] = useState(false);
  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const data = await fetcher(`${API_URL}&q=Antananarivo&aqi=no`);
      console.log(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container flex flex-col items-center justify-center h-screen">
      <div className="prose bg-gray-100 rounded-md p-4">
        <h1>BONJOUR</h1>
        <p>Hello! My name is Jump Jump to quick haha...</p>
        <Button
          onClick={fetchWeatherData}
          className={`bg-blue-700 text-white
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
