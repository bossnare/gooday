import useFetch from '@/hooks/useFetch';
import { API_URL } from '@/utils/constants';
import { roundFormat } from '@/utils/roundFormat';
import { Binoculars, Search, Split, ThermometerSun } from 'lucide-react';
import { useState } from 'react';

// ...existing code...
// Corrige la gestion du formulaire et du bouton de recherche météo

const Hero = () => {
  const [enabled, setEnabledd] = useState(false);
  const [searchTem, setSearchTem] = useState<string>('');
  const { data, error, isLoading } = useFetch(
    `${API_URL}&q=${searchTem}&aqi=no`,
    enabled
  );

  const { country, name } = data?.location || {
    country: '',
    name: '',
  };

  // Corrige la logique pour activer la recherche uniquement si une ville est saisie
  const fetchWeatherData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchTem.trim();
    if (searchTem.trim().length > 0) {
      setEnabledd(true);
    }
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTem(e.target.value);
    setEnabledd(false); // Désactive la recherche tant qu'on édite
  }

  return (
    <section className="mx-auto w-full min-h-[100dvh] flex flex-col gap-10 items-center justify-center h-screen">
      <div className="prose text-center">
        <h1>
          {' '}
          <span className="text-blue-500">Weather</span> App
        </h1>
      </div>
      <div className="prose max-w-0 min-w-[95%] rounded-md p-4">
        <form onSubmit={fetchWeatherData}>
          <div className="md:w-[60%] mx-auto mb-1 border-2 border-gray-500 rounded-md p-1 md:p-2 focus:has-[input]:ring-gray-200 focus:has-[input]:ring-2 flex">
            <input
              onChange={handleChange}
              id="is"
              placeholder="Please enter the name of a city..."
              type="search"
              className="bg-transparent grow-1 focus:outline-hidden"
              name="customSearch"
              value={searchTem}
              disabled={isLoading}
            />
            <button
              type="submit"
              className="flex justify-center w-auto p-2 bg-gray-100 rounded-md active:bg-gray-200 hover:bg-gray-300"
              disabled={isLoading || !searchTem.trim() || enabled}
            >
              {isLoading ? (
                <div className="border-gray-400 rounded-full size-5 animate-spin border-b-transparent border-3"></div>
              ) : (
                <Search color="gray" />
              )}
            </button>
          </div>
        </form>

        {isLoading ? (
          <div className="animate-pulse md:w-[60%] md:mx-auto w-full flex-col md:flex-row flex gap-4 py-2">
            <div className="h-10 bg-gray-400 w-60"></div>
            <div className="h-10 bg-gray-300 w-30"></div>
          </div>
        ) : (
          data && (
            <div className="md:mx-auto md:w-[60%]">
              <h1>
                <span>{name}</span> -{' '}
                <span className="text-slate-500">{country}</span>
              </h1>
              <span className="inline mr-2">
                {data?.current?.condition?.text}
              </span>
              <span className="ml-2">
                <b>
                  <Split />
                </b>
              </span>

              <div className="flex gap-2 font-medium">
                {roundFormat(data?.current?.temp_c || 0)}°C
                <ThermometerSun /> {roundFormat(data?.current?.temp_f || 0)}°F
              </div>
            </div>
          )
        )}

        {error && !isLoading && (
          <div className="text-red-400 block md:mx-auto w-[60%]">
            {error.message}
          </div>
        )}

        {!data && !isLoading && (
          <div className="md:w-[60%] mx-auto flex flex-col text-center items-center text-gray-500">
            <p>
              Please enter the name of a city above and press the search button
              to view the current weather information for your chosen location.
            </p>
            <Binoculars size={40} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
