import useFetch from '@/hooks/useFetch';
import { API_URL } from '@/utils/constants';
import randomCity from '@/utils/randomCity';
import { roundFormat } from '@/utils/roundFormat';
import { Search } from 'lucide-react';
import { Test } from './Test';
import Button from './ui/Button';

const Hero = () => {
  // This component fetches weather data for a random city when the button is clicked
  // const [loading, setLoading] = useState(false);
  // const [info, setInfo] = useState<WeatherData | null>(null);
  const { data, error, isLoading } = useFetch(
    `${API_URL}&q=${randomCity() || 'Antananarivo'}&aqi=no`
  );

  const { country, name } = data?.location || {
    country: '',
    name: '',
  };

  // function for fetching weather data for a random city
  // const fetchWeatherData = async () => {

  // try {
  //   setLoading(true);
  //   const data = await fetcher(
  //     `${API_URL}&q=${randomCity() || 'Antananarivo'}&aqi=no`
  //   );
  //   if (!data.length) {
  //     console.log('Data:', data);
  //     setInfo(data);
  //   }
  // } catch (error) {
  //   console.error('Error fetching weather data:', error);
  // } finally {
  //   setLoading(false);
  // }
  // };

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
            className="p-2 grow-1 focus:outline-hidden"
            name="customSearch"
          />
          <button className="w-auto rounded-md p-2 bg-gray-200 flex justify-center ">
            <Search color="gray" />
          </button>
        </div>

        {isLoading ? (
          <p>Loading ...</p>
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
        {error && <p>{error.name}</p>}
        <Button
          // onClick={fetchWeatherData}
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

      <Test />
    </section>
  );
};

export default Hero;
