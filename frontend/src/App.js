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
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/car" exact>
          <CssPage />
        </Route>
        <Navigate to="/" />
      </Routes>
    </Router>
    // <LoginPage />
  );
};

export default App;