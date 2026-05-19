import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { CartPage } from '../Pages/CartPage';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
    </Routes>
  );
};
