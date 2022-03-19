import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Container } from "react-bootstrap";
import LoginPage from './pages/LoginPage';
import CssPage from './pages/CssPage';
import ForgotPage from './pages/ForgotPage';
import SignupPage from './pages/SignupPage';



function App()
{
  return ( 
    <AuthProvider>
      <Container 
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
        >
        <div className="w-100" style={{ maxWidth: "400px" }}>          
          <SignupPage />
        </div>
      </Container>
    </AuthProvider>
  );
};

export default App;