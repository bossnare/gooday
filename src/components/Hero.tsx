import { fetcher } from '@/libs/fetcher';
import { API_URL } from '@/utils/constants';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section>
      <div className="prose bg-gray-100 rounded-sm p-2">
        <h1>BONJOUR</h1>
        <p>Hello! My name is Jump Jump to quick haha...</p>
        <Button
          onClick={async () => {
            const data = await fetcher(`${API_URL}&q=Antananarivo&aqi=no`);
            console.log(data);
          }}
          className={`bg-blue-700 text-white`}
          label={'Button'}
        />
      </div>
    </section>
  );
};

export default Hero;
