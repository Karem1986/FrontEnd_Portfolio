import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

import {
    gql,
    useMutation
} from "@apollo/client";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admin, setAdmin] = useState(false);

    //Querying with useMutation hook from our apollo server backend 
    const SIGNUP_USER = gql`
    mutation signup($email: String!, $password: String!, $admin: Boolean, $name: String!) {
      signup(email: $email, password: $password, admin: $admin, name: $name ) {
          name
          email
          admin
          password
      }
    }
  `;

    const [signup] = useMutation(SIGNUP_USER);
    function submitForm(e) {
        // console.log('testing form', name, email, password)
        e.preventDefault()
        signup({
            variables:
                { email, password, admin, name }
        })

    }

    return (
        <Container>
            <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
                <h1 className="mt-5 mb-5">Signup</h1>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={event => setName(event.target.value)}
                        type="text"
                        placeholder="Enter name"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
          </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Form.Group className="mt-5">
                    <Button variant="primary" type="submit" onClick={submitForm}>
                        Sign up
          </Button>
                </Form.Group>
                <Link to="/login">Click here to log in</Link>
            </Form>
        </Container>
    );
}
