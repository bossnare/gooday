import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/boss" element={<AppRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
