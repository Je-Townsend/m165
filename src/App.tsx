import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import SinglePage from './pages/SinglePage';

function App() {
  return (
    <Routes>
      <Route path={""} element={<MainPage />} />
      <Route path={"/details/:id"} element={<SinglePage />} />
      
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};
export default App;
