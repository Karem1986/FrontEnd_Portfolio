import { NavLink } from "react-router-dom";
import React from 'react'
import logo from "./logo.jpg"
export default function NavBar() {
    return (
        <div class="navbar">
            <img src={logo} alt="Polshop" style={{ width: 300, height: 240, display: 'inline' }}
            ></img>
            <h1 className="h1-homepage">POLshop.com: where your dreams come true!</h1>
            <NavLink to="/">Home </NavLink>
            <NavLink to="/signup">Signup </NavLink>
            <NavLink to="/login">Login </NavLink>
            <NavLink to="/contact">Contact </NavLink>


        </div>
    )



}
