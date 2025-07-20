import type { HistoryData } from '@/types/data/history';

const HistoryCard = ({ city, search, country }: HistoryData) => {
  return (
    <li>
      <div className="px-2 border-2 bg-gray-50 rounded-md border-gray-100">
        <h4>
          {city} - {country}
        </h4>
        <p>
          You searched for <span className="text-blue-500">'{search}'</span>
        </p>
      </div>
    </li>
  );
};

export default HistoryCard;
