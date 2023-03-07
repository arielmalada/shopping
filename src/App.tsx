import React from 'react';
import './App.css';
import DetailPage from './views/DetailPage';
import HomePage from './views/HomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:productID" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
