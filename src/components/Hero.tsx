import useFetch from '@/hooks/useFetch';
import { API_URL } from '@/utils/constants';
import randomCity from '@/utils/randomCity';
import { roundFormat } from '@/utils/roundFormat';
import { Search } from 'lucide-react';
import Button from './ui/Button';
import { useState } from 'react';

const Hero = () => {
  const [enable, setEnabled] = useState(false);
  // This component fetches weather data for a random city when the button is clicked
  // const [info, setInfo] = useState<WeatherData | null>(null);
  const { data, error, isLoading } = useFetch(
    `${API_URL}&q=${randomCity() || 'Antananarivo'}&aqi=no`,
    enable
  );

  const { country, name } = data?.location || {
    country: '',
    name: '',
  };

  // function for fetching weather data for a random city
  const fetchWeatherData = () => {
    console.log(data);
    console.log(error);
    setEnabled(true);
  };

  return (
    <section className=" mx-auto w-full flex flex-col gap-10 items-center justify-center h-screen">
      <div className="prose text-center">
        <h1>A Weather App</h1>
      </div>
      <div className="prose max-w-0 w-90 min-w-[95%] rounded-md p-4">
        <div className="w-full border-2 rounded-md p-1 focus:has-[input]:ring-gray-200 focus:has-[input]:ring-2 flex">
          <input
            id="is"
            placeholder="Type a city"
            type="search"
            className=" grow-1 focus:outline-hidden"
            name="customSearch"
          />
          <button className="w-auto rounded-md p-2 bg-gray-200 flex justify-center ">
            <Search color="gray" />
          </button>
        </div>

        {isLoading ? (
          <div className="animate-pulse w-full flex-col md:flex-row flex gap-4 py-2">
            <div className="w-60 h-10 bg-gray-400"></div>
            <div className="w-30 h-10 bg-gray-300"></div>
          </div>
        ) : (
          <>
            <h1>
              <span className="text-purple-500">{name}</span> -{' '}
              <span className="text-slate-400">{country}</span>
            </h1>
            <p className="inline mr-2">{data?.current?.condition?.text}</p>
            <span className="inline-block mr-2">
              <b>~ {roundFormat(data?.current?.temp_c || 0)}°C</b>
            </span>
            <span>
              <b>~ {roundFormat(data?.current?.temp_f || 0)}°F</b>
            </span>
          </>
        )}
        {error && <p className="text-red-400">Reéssayer</p>}
        <Button
          onClick={fetchWeatherData}
          className={`bg-indigo-700 text-white mt-2
            hover:bg-indigo-800 focus:bg-indigo-900
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            focus:ring-offset-2 transition-all duration-300 ease-in-out flex justify-center items-center ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          label={'Start'}
          loading={isLoading}
        />
      </div>
    </section>
  );
};

export default Hero;
