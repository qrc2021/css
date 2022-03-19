import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';
import firebase from './firebase';
import './App.css';
import LoginPage from './pages/LoginPage';
import CssPage from './pages/CssPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPage from './pages/ForgotPage';



function App()
{
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/car" element={<CssPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/forgot" element={<ForgotPage />} />
      </Routes>
    </Router>
  );
};

export default App;