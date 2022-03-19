import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Card, Form } from 'react-bootstrap';


export default function Register()
{
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const serialRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    return(
        <>
            <Card>
                <Card.Body>
                    <h2> Register</h2>
                    <Form>
                        <Form.Group id="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" ref={firstNameRef} required />
                        </Form.Group>
                        <Form.Group id="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" ref={lastNameRef} required />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="serialNum">
                            <Form.Label>CSS Serial Number</Form.Label>
                            <Form.Control type="text" ref={serialRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button className="w-100" type="submit"> Register</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log in
            </div>
        </>
    )
}