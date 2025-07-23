import { StretchHorizontal } from 'lucide-react';
import { useState } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { ModalConfirm } from './components/ui/Modal';

function App() {
  const [isSown, setIsSown] = useState(false);
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      {/* header */}
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
          className={`fixed inset-0 z-5 lg:hidden transition-opacity duration-400 
            ease-in-out will-change-auto bg-black/40 
            ${
              isSown && !isModal
                ? ' opacity-100'
                : 'opacity-0 pointer-events-none'
            }`}
        ></div>

        <div
          onClick={() => setIsModal(false)}
          className={`${
            isModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } fixed inset-0 bg-black/40 z-15 transition-opacity duration-400 
            ease-in-out will-change-auto`}
        ></div>

        {/* Modal */}
        <ModalConfirm isModal={isModal} setIsModal={setIsModal} />

        {/* sidebar */}
        <Sidebar
          isSown={isSown}
          setIsSown={setIsSown}
          setIsModal={setIsModal}
        />

        {/* Main app */}
        <Main />
      </div>
      {/* routes */}
    </>
  );
}

export default App;
