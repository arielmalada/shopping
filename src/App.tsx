import React from 'react';
import './App.css';
import DetailPage from './views/DetailPage';
import HomePage from './views/HomePage';

import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:productID" element={<DetailPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
