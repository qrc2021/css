import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Navbar, Container, Nav } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import "../../src/pretty.css";


export default function Forgot() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const nav =  useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
    
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }
    setLoading(false)
  }
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
            <img
            alt=""
            src="/eye.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
            CSS
            </Navbar.Brand>
            </Container>
      </Navbar>
      <div className="bg">
        <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Password Reset</h2>
              {/* {JSON.stringify(currentUser)} */}
              {/* {currentUser.email} */}
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit = {handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100 mt-3" type="submit">Reset Password</Button>
                <div className='w-100 text-center mt-2'>
                  <Link to="/login">Login</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}
