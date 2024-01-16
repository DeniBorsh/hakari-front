import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import { publicRoutes } from '../router';

const AppRouter = () => {
  return (
    <Routes>
        {publicRoutes.map(r =>
          <Route key={r.path} path={r.path} element={<r.component/>} exact={r.exact}/>
        )}
        <Route key="*" path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  );
};

export default AppRouter;