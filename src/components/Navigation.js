import { NavLink } from "react-router-dom"
import React from "react"
import logo from "./logo.jpg"
import shoppingicon from "./shoppingicon.png"
export default function NavBar() {
    return (
        <div className="navbar">
            <img
                src={logo}
                alt="Polshop"
                style={{ width: 190, height: 180, display: "inline", padding: '40px' }}
            ></img>
            <h1 className="h1-homepage">
                POLshop: treat yourself!
            </h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/signup">Signup </NavLink>
            <NavLink to="/login">Login </NavLink>
            <NavLink to="/contact">Contact </NavLink>
            <NavLink to="/shoppingcard">
                <img
                    src={shoppingicon}
                    style={{ width: 75, height: 75, display: "inline" }}
                ></img>{" "}
            </NavLink>
        </div>
    )
}
