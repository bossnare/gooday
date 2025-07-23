import type { HistoryData } from '@/types/data/history';
import type { ChildComponentProps } from '@/types/ui/sidebar';
import { BetweenHorizontalEnd, BrushCleaning, History } from 'lucide-react';
import HistoryCard from './HistoryCard';
import Button from './ui/Button';

const Sidebar = ({ isSown, setIsSown, setIsModal }: ChildComponentProps) => {
  // localStorage
  const history: HistoryData[] = JSON.parse(
    localStorage.getItem('history') || '[]'
  );
  const isHistory = history.length > 0;

  return (
    <aside
      className={`${isSown ? 'translate-x-0' : '-translate-x-full px-0'} 
            lg:w-[25%] bg-white w-5/6 lg:translate-x-0 will-change-transform 
            h-full flex flex-col transition-transform duration-400 ease-in-out z-10 
            border-r-1 border-r-gray-200 top-0 left-0 fixed`}
    >
      <div className="flex items-center px-4 py-2 border-b-1 border-b-gray-200">
        <img src="/nav_icon_x32.svg" alt="logo" className="w-10 lg:w-10" />
        <button
          title="Close"
          className="ml-auto icon lg:hidden"
          onClick={() => setIsSown(false)}
        >
          <BetweenHorizontalEnd />
        </button>
      </div>

      <div className="h-full px-4 mt-3 mb-5 overflow-y-auto prose prose-gray grow-1 scroll-smooth">
        <h3 className="flex items-center gap-2 text-gray-500">
          Search history <History />
          {isHistory && (
            <button
              title="Clear All"
              className="ml-auto icon"
              onClick={() => setIsModal(true)}
            >
              <BrushCleaning />
            </button>
          )}
        </h3>

        {isHistory ? (
          <ul
            className="h-auto px-0 rounded-lg !space-y-5 *:m-0 pt-1 list-none border-gray-200 divide-y 
              divide-gray-200 border-1"
          >
            {history.map((hist) => (
              <HistoryCard key={hist.id} {...hist} />
            ))}
          </ul>
        ) : (
          <div className="pl-2">
            <p className="!text-gray-500">
              Nothing search history, please create one. To create this, go to
              search bar and search your favourite city.
            </p>
            <Button label="Create one" className="text-white gradient-bg" />
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
