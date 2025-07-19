import { Route, Routes } from 'react-router-dom';
import History from './components/History';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default AppRoutes;
