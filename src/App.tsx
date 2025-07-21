import {
  BetweenHorizontalEnd,
  BrushCleaning,
  History,
  StretchHorizontal,
} from 'lucide-react';
import { useState } from 'react';
import HistoryCard from './components/HistoryCard';
import Main from './components/Main';
import Button from './components/ui/Button';
import { history, isHistory } from './utils/constants';

function App() {
  const [isSown, setIsSown] = useState(false);

  function clearAllHistory() {
    if (confirm('Do you have to clear all search history without trace?'))
      localStorage.removeItem('history');
  }

  return (
    <>
      <header className="fixed top-0 left-0 flex justify-center w-full bg-white border-b-1 border-b-gray-200">
        <nav className="flex items-center w-full gap-2 px-4 py-2 md:container">
          <button className="icon" onClick={() => setIsSown(!isSown)}>
            <StretchHorizontal />
          </button>
          <img
            src="/nav_icon_x32.svg"
            alt="logo"
            className="w-10 ml-4 lg:w-10"
          />

          <h1 className="text-xl font-bold lg:hidden">GOODAY</h1>
        </nav>
      </header>
      <div className="flex">
        {/* Overlay */}
        <div
          onClick={() => setIsSown(false)}
          className={`fixed inset-0 z-5 lg:hidden transition-opacity duration-400 ease-in-out will-change-auto bg-black/40 ${
            isSown ? ' opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        ></div>

        <aside
          className={`lg:w-[25%] ${
            isSown ? 'translate-x-0' : '-translate-x-full px-0'
          } bg-white w-5/6 lg:translate-x-0 will-change-transform h-full flex flex-col transition-transform duration-400 ease-in-out z-10 border-r-1 border-r-gray-200 lg:sticky top-0 left-0 lg:h-auto fixed`}
        >
          <div className="flex items-center px-2 py-2 border-b-1 border-b-gray-200">
            <img src="/nav_icon_x32.svg" alt="logo" className="w-10 lg:w-10" />

            <button
              title={isHistory ? 'Clear All' : 'Close'}
              className="ml-auto icon"
              onClick={() =>
                isHistory ? clearAllHistory() : setIsSown(!isSown)
              }
            >
              {isHistory ? <BrushCleaning /> : <BetweenHorizontalEnd />}
            </button>
          </div>

          <div className="h-full px-4 mt-3 mb-5 overflow-y-auto prose prose-gray grow-1 scroll-smooth">
            <h3 className="flex items-center gap-2 text-gray-500">
              Search history <History />
            </h3>

            {isHistory ? (
              <ul className="h-auto px-0 rounded-lg !space-y-5 *:m-0 pt-1 list-none border-gray-200 divide-y divide-gray-200 border-1">
                {history.map((hist) => (
                  <HistoryCard key={hist.id} {...hist} />
                ))}
              </ul>
            ) : (
              <div className="pl-2">
                <p className="!text-gray-500">
                  Nothing search history, please create one. To create this, go
                  to search bar and search your favourite city.
                </p>
                <Button label="Create one" className="text-white gradient-bg" />
              </div>
            )}
          </div>
        </aside>

        <Main />
      </div>
      {/* routes */}
    </>
  );
}

export default App;
