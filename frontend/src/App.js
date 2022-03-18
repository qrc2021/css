import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import CssPage from './pages/CssPage';

function App()
{
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/css" exact>
          <CssPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;