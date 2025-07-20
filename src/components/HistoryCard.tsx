import type { HistoryData } from '@/types/data/history';

const HistoryCard = ({ city, search, country, icon }: HistoryData) => {
  return (
    <li>
      <div className="px-2 border-1 bg-gray-50 rounded-lg border-gray-100 relative">
        <h4 className="mt-2">
          {city} - {country}
        </h4>
        <p>
          You searched for <span className="text-blue-500">'{search}'</span>
        </p>
        <img
          width="50"
          height="50"
          className="absolute object-contain right-0 top-0 h-full"
          src={icon}
          alt={city}
        />
      </div>
    </li>
  );
};

export default HistoryCard;
