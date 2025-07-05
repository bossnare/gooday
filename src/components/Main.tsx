import { fetcher } from '@/libs/fetcher';
import Button from './ui/Button';

const Main = () => {
  return (
    <main className="container">
      <div className="prose bg-gray-100 rounded-sm p-1">
        <h1>BONJOUR</h1>
        <p>Hello! My name is Jump Jump to quick haha...</p>
        <Button
          onClick={() =>
            fetcher({
              url: `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Antananarivo&aqi=no`,
            })
          }
          className={`bg-blue-700 text-white`}
          label={'Button'}
        />
      </div>
    </main>
  );
};

export default Main;
