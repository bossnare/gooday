import useFetch from '@/hooks/useFetch';
import { API_URL } from '@/utils/constants';
import { roundFormat } from '@/utils/roundFormat';
import { Search, ThermometerSun, Split, Binoculars } from 'lucide-react';
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
    if (searchTem.trim().length > 0) {
      setEnabledd(true);
    }
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTem(e.target.value);
    setEnabledd(false); // Désactive la recherche tant qu'on édite
  }

  return (
    <section className="mx-auto w-full flex flex-col gap-10 items-center justify-center h-screen">
      <div className="prose text-center">
        <h1>
          {' '}
          <span className="text-blue-500">Weather</span> App
        </h1>
      </div>
      <div className="prose max-w-0 w-90 min-w-[95%] rounded-md p-4">
        <form onSubmit={fetchWeatherData}>
          <div className="w-full mb-1 border-2 border-gray-500 rounded-md p-1 md:p-2 focus:has-[input]:ring-gray-200 focus:has-[input]:ring-2 flex">
            <input
              onChange={handleChange}
              id="is"
              placeholder="Please enter the name of a city..."
              type="search"
              className="grow-1 focus:outline-hidden"
              name="customSearch"
              value={searchTem}
              disabled={isLoading}
            />
            <button
              type="submit"
              className="w-auto rounded-md p-2 bg-gray-100 flex justify-center active:bg-gray-200 hover:bg-gray-300"
              disabled={isLoading || !searchTem.trim() || enabled}
            >
              <Search color="gray" />
            </button>
          </div>
        </form>

        {isLoading ? (
          <div className="animate-pulse w-full flex-col md:flex-row flex gap-4 py-2">
            <div className="w-60 h-10 bg-gray-400"></div>
            <div className="w-30 h-10 bg-gray-300"></div>
          </div>
        ) : (
          data && (
            <>
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
            </>
          )
        )}

        {!data && !isLoading && (
          <div className="md:w-1/2 mx-auto flex flex-col text-center items-center text-gray-500">
            <p>
              Please enter the name of a city above and press the search button
              to view the current weather information for your chosen location.
            </p>
            <Binoculars size={40} />
          </div>
        )}
        {error && <p className="text-red-400">Réessayer</p>}
      </div>
    </section>
  );
};

export default Hero;
