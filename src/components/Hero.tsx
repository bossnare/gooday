import { fetcher } from '@/libs/fetcher';
import { API_URL } from '@/utils/constants';
import Button from './ui/Button';
import { useState } from 'react';
import randomCity from '@/utils/randomCity';
import type { WeatherData } from '@/types/data/api';
import { roundFormat } from '@/utils/roundFormat';
import { Search } from 'lucide-react';
import { Test } from './Test';

const Hero = () => {
  // This component fetches weather data for a random city when the button is clicked
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<WeatherData | null>(null);

  const { country, name } = info?.location || {
    country: 'None',
    name: 'None',
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
    <section className=" bg-black/50 mx-auto w-full flex flex-col gap-10 items-center justify-center h-screen">
      <div className="prose text-center">
        <h1>A Weather App</h1>
      </div>
      <div className="prose max-w-0 w-90 min-w-[95%] bg-black/50 rounded-md p-4">
        <div className="w-full border-2 rounded-md p-1 focus:has-[input]:ring-gray-200 focus:has-[input]:ring-2 flex">
          <input
            id="is"
            placeholder="Type a city"
            type="search"
            className="p-2 grow-1 focus:outline-hidden"
            name="customSearch"
          />
          <button className="w-auto rounded-md p-2 bg-white/10 flex justify-center ">
            <Search color="lightgray" />
          </button>
        </div>

        <h1>
          <span className="text-purple-500">{name}</span> -{' '}
          <span className="text-gray-200">{country}</span>
        </h1>
        <p className="inline mr-2">{info?.current?.condition?.text}</p>
        <span className="inline-block mr-2">
          <b>~ {roundFormat(info?.current?.temp_c || 0)}°C</b>
        </span>
        <span>
          <b>~ {roundFormat(info?.current?.temp_f || 0)}°F</b>
        </span>
        <Button
          onClick={fetchWeatherData}
          className={`bg-indigo-700 text-white mt-2
            hover:bg-indigo-800 focus:bg-indigo-900
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            focus:ring-offset-2 transition-all duration-300 ease-in-out flex justify-center items-center ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          label={'Start'}
          loading={loading}
        />
      </div>

      <Test />
    </section>
  );
};

export default Hero;
