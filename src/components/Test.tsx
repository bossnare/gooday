import useFetch from '@/hooks/useFetch';
import { API_URL } from '@/utils/constants';

export const Test = () => {
  const { data, error, isLoading } = useFetch(
    `${API_URL}&q=Antananarivo&aqi=no`
  );
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <h1>{data?.location?.name}</h1>
      {error && <p>Error fetching data</p>}
    </div>
  );
};
