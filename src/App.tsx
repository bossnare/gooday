import type { HistoryData } from '@/types/data/history';
import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
import HistoryCard from './components/HistoryCard';
import Main from './components/Main';
import Button from './components/ui/Button';

function App() {
  const [isSown, setIsSown] = useState(false);
  const history: HistoryData[] = JSON.parse(
    localStorage.getItem('history') || '[]'
  );

  return (
    <>
      <header className="fixed flex justify-center w-full bg-white border-b-1 border-b-gray-100">
        <nav className="flex items-center w-full gap-2 px-4 py-1 md:container md:px-10">
          <button className="icon" onClick={() => setIsSown(!isSown)}>
            <AlignJustify />
          </button>
          <img
            src="/nav_icon_x32.png"
            alt="logo"
            className="h-auto w-11 lg:w-12"
          />

          <h1 className="text-xl font-bold lg:hidden">GOODAY</h1>
        </nav>
      </header>
      <div className="flex">
        <aside
          className={`lg:w-[25%] w-full z-10 border-r-1 border-r-gray-100 ${
            isSown
              ? ' bg-black/40 opacity-100'
              : 'opacity-0 pointer-events-none'
          }  lg:sticky lg:bg-transparent lg:pointer-events-auto h-full lg:h-auto lg:opacity-100 fixed transition-opacity duration-400 ease-in-out`}
        >
          <div
            className={`${
              isSown ? 'translate-x-0' : '-translate-x-full px-0'
            } bg-white w-5/6 lg:translate-x-0 lg:w-full h-full flex flex-col transition-transform duration-400 ease-in-out`}
          >
            <div className="flex items-center py-1 border-b-1 border-b-gray-100">
              <img
                src="/nav_icon_x32.png"
                alt="logo"
                className="h-auto w-11 lg:w-12"
              />

              <h1 className="hidden text-xl font-bold">GOODAY</h1>
              <button
                className="ml-auto icon"
                onClick={() => setIsSown(!isSown)}
              >
                <AlignJustify />
              </button>
            </div>

            <div className="h-full px-2 mb-5 overflow-y-auto prose grow-1 scroll-smooth">
              <h3>Search history</h3>
              {history.length > 0 ? (
                <ul className="h-auto pt-2 pb-5 pl-2 list-none">
                  {history.map((hist) => (
                    <HistoryCard key={hist.id} {...hist} />
                  ))}
                </ul>
              ) : (
                <>
                  <p className="!text-gray-500">
                    Nothing search history, please create one. To create this,
                    go to search bar and search your favourite city.
                  </p>
                  <Button
                    label="Create one"
                    className="text-white bg-blue-500"
                  />
                </>
              )}
            </div>
          </div>
        </aside>

        <Main />
      </div>
      {/* routes */}
    </>
  );
}

export default App;
