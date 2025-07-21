import type { HistoryData } from '@/types/data/history';

const HistoryCard = ({ city, search, country, icon }: HistoryData) => {
  return (
    <li>
      <div className="relative px-2 mt-1 mr-2 border-b-0 border-gray-200 rounded-t-lg border-1">
        <h4 className="mt-2">
          {city} - {country}
        </h4>
        <p className="mb-0">
          You searched for <span className="font-semibold ">'{search}'</span>
        </p>
        {/* si pas d'icon, cache le */}
        {icon && (
          <div className="absolute translate-x-10 flex items-center object-contain overflow-hidden size-10">
            <img className="w-full h-full " src={icon} alt={city} />
          </div>
        )}
      </div>
    </li>
  );
};

export default HistoryCard;
