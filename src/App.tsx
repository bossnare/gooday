import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
import Main from './components/Main';

function App() {
  const [isSown, setIsSown] = useState(false);

  return (
    <>
      <header className="fixed flex justify-center w-full bg-gray-50 border-b-1 border-b-gray-100">
        <nav className="flex items-center w-full gap-2 px-4 py-1 md:container md:px-10">
          <button onClick={() => setIsSown(!isSown)}>
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
          className={`lg:w-[20%] w-full ${
            isSown
              ? ' bg-black/50 opacity-100'
              : 'opacity-0 pointer-events-none'
          }  lg:sticky lg:bg-transparent lg:pointer-events-auto h-full lg:h-auto lg:opacity-100 fixed overflow-y-auto transition-opacity duration-300 ease-in-out`}
        >
          <div
            className={`${
              isSown ? 'translate-x-0' : '-translate-x-full px-0'
            } bg-gray-100 w-5/6 lg:translate-x-0 lg:w-full px-4 h-full flex flex-col transition-transform duration-200 ease-in-out`}
          >
            <div className="flex items-center">
              <img
                src="/nav_icon_x32.png"
                alt="logo"
                className="h-auto w-11 lg:w-12"
              />

              <h1 className="hidden text-xl font-bold lg:block">GOODAY</h1>
              <button className="ml-auto" onClick={() => setIsSown(!isSown)}>
                <AlignJustify />
              </button>
            </div>

            <div className="h-auto px-2 pt-2 prose bg-gray-200 rounded-md grow-1">
              <h4>History</h4>
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
