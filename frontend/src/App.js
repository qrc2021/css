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
import PrivateRoute from './components/PrivateRoute';

function App()
{
  return ( 
    <Container 
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
      >
      <div className="w-100" style={{ maxWidth: "400px" }}>          
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={ <PrivateRoute><HomePage /></PrivateRoute> }/>
              <Route path="/register" element={ <SignupPage /> } />
              <Route path="/login" element={ <LoginPage /> } />
              <Route path="/forgot" element={ <ForgotPage /> } />
              <Route path="/update-profile" element={ <UpdatePage />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;