import { fetcher } from '@/libs/fetcher';
import { API_KEY } from '@/utils/constants';
import Button from './ui/Button';

const Main = () => {
  return (
    <main className="container">
      <div className="prose bg-gray-100 rounded-sm p-1">
        <h1>BONJOUR</h1>
        <p>Hello! My name is Jump Jump to quick haha...</p>
        <Button
          onClick={async () => {
            const data = await fetcher(
              `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Antananarivo&aqi=no`
            );
            console.log(data);
          }}
          className={`bg-blue-700 text-white`}
          label={'Button'}
        />
      </div>
    </main>
  );
};

export default Main;
