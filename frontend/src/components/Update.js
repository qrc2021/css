import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Navbar, Container, Nav } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import"../../src/pretty.css";

export default function Update() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  // const serialRef = useRef()
  const { currentUser, updatePassword, updateEmail, logout } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()

  async function handleLogout() {
    setError("")
    try{
        await logout()
        nav("/login")
    }catch {
        setError("Failed to log out")
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value))
    }

    if (passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(() => {
        nav("/") 
    }).catch(() => {
        setError("Failed to update account")
    }).finally(() => {
       setLoading(false) 
    })

  }
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">
            <img
            alt=""
            src="/eye.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
            CSS
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/update">Update Profile</Nav.Link>
            </Nav>
              <Nav className="navbarScroll">
                <Button className="btn-secondary"onClick={handleLogout} >Logout</Button>
              </Nav>
            </Container>
      </Navbar>
      <div className='bg'>
      <Container className="d-flex  align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Update Profile</h2>
            {/* {JSON.stringify(currentUser)} */}
            {/* {currentUser.email} */}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit = {handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
              </Form.Group>
              {/* <Form.Group id="serial">
                <Form.Label>CSS Serial Number</Form.Label>
                <Form.Control type="text" ref={serialRef} required />
              </Form.Group> */}
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} placeholder='Leave blank to keep same'/>
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} placeholder='Leave blank to keep same' />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-4" type="submit">Update</Button>
              <div className='w-100 text-center mt-2'>
                <Link to="/">Cancel</Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
        </Container>
      </div>
    </>
  );
}
