import useFetch from '@/hooks/useFetch';
import { setHistory } from '@/libs/setHistory.data';
import { API_URL } from '@/utils/constants';
import { roundFormat } from '@/utils/roundFormat';
import { Binoculars, Search, Split, ThermometerSun } from 'lucide-react';
import { useEffect, useState } from 'react';

// ...existing code...
// Corrige la gestion du formulaire et du bouton de recherche météo

const Hero = () => {
  const [enabled, setEnabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, error, isLoading } = useFetch(
    `${API_URL}&q=${searchTerm}&aqi=no`,
    enabled
  );

  const { country, name } = data?.location || {
    country: '',
    name: '',
  };

  // set search history
  useEffect(() => {
    setHistory(
      data,
      error,
      searchTerm,
      name,
      country,
      data?.current?.condition?.icon
    );
  }, [data, error, searchTerm, name, country, data?.current?.condition?.icon]);

  function handleSearch() {
    setEnabled(true); // Réinitialise le champ de recherche après la soumission
  }

  // Corrige la logique pour activer la recherche uniquement si une ville est saisie
  const fetchWeatherData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchTerm.trim();

    if (searchTerm.trim().length > 0) {
      handleSearch();
    }
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
    setEnabled(false); // Désactive la recherche tant qu'on édite
  }

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[100dvh] gap-10 mx-auto">
      <div className="prose text-center">
        <h1>
          {' '}
          <span className="primary-text-color">GOODAY </span>
          <div className="text-gray-800">Weather App</div>
        </h1>
      </div>
      <div className="prose max-w-0 min-w-[95%]">
        <form onSubmit={fetchWeatherData}>
          <div
            className="md:w-[70%] mx-auto mb-1 border-2 border-gray-400 rounded-md p-1.5 
          has-[input:focus]:ring-gray-600 has-[input:focus]:ring-2 has-[input:focus]:border-gray-200 flex 
            transition-all duration-300 ease-in-out"
          >
            <input
              onChange={handleChange}
              id="is"
              placeholder="Enter the name of a city..."
              type="search"
              className="bg-transparent grow-1 focus:outline-hidden"
              name="customSearch"
              value={searchTerm}
              disabled={isLoading}
            />
            <button
              type="submit"
              className="flex justify-center p-3 bg-gray-100 rounded-md active:bg-gray-200 transition-colors 
              duration-200 ease-in hover:bg-gray-300"
              disabled={isLoading || !searchTerm.trim() || enabled}
            >
              {isLoading ? (
                <div
                  className="border-gray-400 rounded-full size-5 animate-spin border-b-transparent 
                border-3"
                ></div>
              ) : (
                <Search className="text-gray-500" strokeWidth={3} />
              )}
            </button>
          </div>
        </form>

        {isLoading ? (
          <div className="animate-pulse md:w-[70%] md:mx-auto w-full flex-col md:flex-row flex gap-4 py-2">
            <div className="h-10 bg-gray-400 w-60"></div>
            <div className="h-10 bg-gray-300 w-30"></div>
          </div>
        ) : (
          data && (
            <div className="md:mx-auto md:w-[70%]">
              <h1>
                <span>{name}</span> -{' '}
                <span className="text-gray-700">{country}</span>
              </h1>
              <span className="inline mr-2">
                {data?.current?.condition?.text}
                <div className="flex items-center object-contain overflow-hidden size-10">
                  <img
                    className="w-full h-full "
                    src={data?.current?.condition?.icon}
                    alt={name}
                  />
                </div>
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
          <div className="text-red-500 block md:mx-auto w-[70%]">
            {error.message}
          </div>
        )}

        {!data && !isLoading && (
          <div className="md:w-[65%] mx-auto flex flex-col text-center items-center text-gray-500">
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
