import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './constants/routes';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
