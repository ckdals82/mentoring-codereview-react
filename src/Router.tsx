import Home from '@pages/Home';
import Ticket from '@pages/Ticket';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
