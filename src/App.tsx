import Main from './components/Main';

function App() {
  return (
    <>
      <header className="w-full fixed bg-gray-50 flex justify-center border-b-1 border-b-gray-100">
        <nav className=" container px-10 w-full flex items-center gap-2">
          <img
            src="/nav_icon_x32.png"
            alt="logo"
            className="w-12 lg:w-15 h-auto"
          />
          <nav>
            <h1 className="font-bold text-xl text-gray-800">GooDay</h1>
          </nav>
        </nav>
      </header>
      <Main />
    </>
  );
}

export default App;
