import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import CssPage from './pages/CssPage';
import RegisterPage from './pages/RegisterPage';


function App()
{
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/car" element={<CssPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;