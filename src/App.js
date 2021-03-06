import React, { useState } from "react"
import { ApolloProvider } from "@apollo/client"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { HttpLink } from "apollo-link-http"
import NavBar from "./components/Navigation"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Homepage from "./pages/Homepage"
import Productdetail from "./pages/Productdetail"
import ShoppingCart from "./components/ShoppingCart"
import SignUp from "./pages/SIgnup"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import UserContext from "../src/Context/UserContext"
import CheckoutForm from "./pages/Stripe/CheckoutForm"
import TokenValidation from "../src/components/TokenValidation"

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        headers: { authorization: localStorage.getItem("token") },
        uri: "https://polwebshop.herokuapp.com/",
    }),
})


function App() {
    const [isLoggedIn, setUpLoggingatTopLevel] = useState(false)

    return (
        <ApolloProvider client={client}>
            <UserContext.Provider
                value={{ isLoggedIn: isLoggedIn, setUpLoggingatTopLevel }}
            >
                <TokenValidation />
                <Router>
                    <div className="App">
                        <NavBar />
                        <Switch>
                            <Route path="/checkout" component={CheckoutForm} />
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={SignUp} />
                            <Route path="/contact" component={Contact} />

                            <Route
                                path="/shoppingcard"
                                component={ShoppingCart}
                            />

                            <Route
                                path="/productpage/:id?"
                                component={Productdetail}
                            />
                            <Route exact path="/" component={Homepage} />
                        </Switch>
                    </div>
                </Router>
            </UserContext.Provider>
        </ApolloProvider>
    )
}

export default App
