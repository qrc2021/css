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

function App()
{
  return (
    <Router>
      <Routes>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/css">
          <CssPage />
        </Route>
        {/* <Navigate to="/" /> */}
      </Routes>
    </Router>
  );
};

export default App;