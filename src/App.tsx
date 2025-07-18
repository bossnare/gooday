import Main from './components/Main';
import AppRoutes from './Routes';

function App() {
  return (
    <>
      <header className="fixed flex justify-center w-full bg-gray-50 border-b-1 border-b-gray-100">
        <nav className="flex items-center w-full gap-2 px-4 py-1 md:container md:px-10">
          <img
            src="/nav_icon_x32.png"
            alt="logo"
            className="w-12 h-auto lg:w-15"
          />
          <nav>
            <h1 className="text-xl font-bold text-gray-800">GooDay</h1>
          </nav>
        </nav>
      </header>
      <Main />
      {/* routes */}
      <AppRoutes />
    </>
  );
}

export default App;
