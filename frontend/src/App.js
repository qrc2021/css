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
import RegisterPage from './pages/RegisterPage';
import ForgotPage from './pages/ForgotPage';



function App()
{
  return (
    <AuthProvider>
      <Container 
        className="d-flex align-items-center justify-content-center"
        styple={{ minHeight: "100vh" }}
        >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <Routes>
              <Route exact path="/" element={<LoginPage />} />
              <Route exact path="/car" element={<CssPage />} />
              <Route exact path="/register" element={<RegisterPage />} />
              <Route exact path="/forgot" element={<ForgotPage />} />
            </Routes>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
};

export default App;