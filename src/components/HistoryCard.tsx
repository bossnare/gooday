import type { HistoryData } from '@/types/data/history';

const HistoryCard = ({ city, search, country, icon }: HistoryData) => {
  return (
    <li>
      <div className="relative px-2 border-b-0 border-gray-100 rounded-t-lg border-1">
        <h4 className="mt-2">
          {city} - {country}
        </h4>
        <p>
          You searched for <span className="text-blue-500">'{search}'</span>
        </p>
        <img
          width={50}
          height={50}
          className="absolute top-0 right-0 object-contain h-full"
          src={icon}
          alt={city}
        />
      </div>
    </li>
  );
};

export default HistoryCard;
