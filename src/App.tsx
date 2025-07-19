import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
import Main from './components/Main';
import Button from './components/ui/Button';

type historyData = {
  id: number;
  city: string;
  search: string;
  country: string;
};

function App() {
  const [isSown, setIsSown] = useState(false);
  const history: historyData[] = JSON.parse(
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
          className={`lg:w-[20%] w-full z-10 border-r-1 border-r-gray-100 ${
            isSown
              ? ' bg-black/50 opacity-100'
              : 'opacity-0 pointer-events-none'
          }  lg:sticky lg:bg-transparent lg:pointer-events-auto h-full lg:h-auto lg:opacity-100 fixed transition-opacity duration-400 ease-in-out`}
        >
          <div
            className={`${
              isSown ? 'translate-x-0' : '-translate-x-full px-0'
            } bg-white w-5/6 lg:translate-x-0 lg:w-full px-4 h-full flex flex-col overflow-y-auto transition-transform duration-400 ease-in-out`}
          >
            <div className="flex items-center py-2">
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

            <div className="h-auto px-2 pt-2 prose border-1  border-gray-200 rounded-md grow-1">
              <h4>History</h4>
              {history.length > 0 ? (
                <ul className="list-none">
                  {history.map((hist) => (
                    <li key={hist.id}>
                      <div className="px-2 border-2 bg-gray-50 rounded-md border-gray-100">
                        <h4>
                          {hist.city} - {hist.country}
                        </h4>
                        <p>
                          You searched for{' '}
                          <span className="text-blue-500">'{hist.search}'</span>
                        </p>
                      </div>
                    </li>
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
                    className="bg-blue-500 text-white"
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
