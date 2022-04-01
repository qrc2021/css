import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Navbar, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import "../../src/pretty.css";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const nav =  useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      nav("/")
    } catch {
      setError("Failed to log in")
    }
    setLoading(false)
  }
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/login">
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
              <h2 className="text-center mb-4">Log In</h2>
              {/* {JSON.stringify(currentUser)} */}
              {/* {currentUser.email} */}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit = {handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100 mt-4" type="submit">Log In</Button>
                <Button className="btn-secondary w-100 mt-2" type="button" href="/register">Register</Button>
                <div className='w-100 text-center mt-2'>
                  <Link to="/forgot">Forgot Password?</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}
