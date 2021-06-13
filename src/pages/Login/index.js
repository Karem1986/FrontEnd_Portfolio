import React, { useState, useContext, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import UserContext from "../../Context/UserContext"
import { Link, useHistory } from "react-router-dom"
import { Col } from "react-bootstrap"
import { gql, useMutation } from "@apollo/client"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //UseContext hook will manage the state of the entire app to provide functionality to some features in any part of the app i need it, for example
    //redirecting our user when logged in to the shopping card and improving user experience
    const { isLoggedIn, setUpLoggingatTopLevel } = useContext(UserContext)
    const history = useHistory()

    //Querying with useMutation hook from our apollo server backend
    const LOGIN_USER = gql`
        mutation login($email: String, $password: String!) {
            login(email: $email, password: $password) {
                user {
                    name
                }
                token
            }
        }
    `

    const [login, { data, loading, error }] = useMutation(LOGIN_USER, {
        //Indicating user is logged in saving the token to local
        //storage to persist the session:
        onCompleted({ login }) {
            localStorage.setItem("token", login.token)
      
            setUpLoggingatTopLevel(true) //it needs validation to make sure it comes back with the token
        },
    })
    function submitForm(e) {
        e.preventDefault()
        login({
            variables: { email, password },
        })
    }
    useEffect(() => {
        if (isLoggedIn) {
            history.push("/shoppingcard")
        }
    }, [isLoggedIn, history]) //the useEffect checks this array for changes and will only run if there are changes, when the isLOgged changes from true to false and viceversa

    console.log("data", data)
    if (loading) return "Loading"
    if (error) return <p>An error occurred</p>

    return (
        <Container>
            <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
                <h1 className="mt-5 mb-5">Login</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Form.Group className="mt-5">
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={submitForm}
                    >
                        Log in
                    </Button>
                </Form.Group>
                <Link
                    to="/signup"
                    style={{
                        textAlign: "center",
                        backgroundColor: "Turquoise",
                        color: "black",
                    }}
                >
                    Click here to sign up
                </Link>
            </Form>
        </Container>
    )
}
