import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Container } from "react-bootstrap";
import LoginPage from './pages/LoginPage';
import CssPage from './pages/CssPage';
import ForgotPage from './pages/ForgotPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import UpdatePage from './pages/UpdatePage';
import PrivateRoute from './components/PrivateRoute';

function App()
{
  return (           
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={ <PrivateRoute><HomePage /></PrivateRoute> }/>
          <Route path="/update" element={ <PrivateRoute><UpdatePage /></PrivateRoute> }/>    
          <Route path="/register" element={ <SignupPage /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/forgot" element={ <ForgotPage /> } />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;