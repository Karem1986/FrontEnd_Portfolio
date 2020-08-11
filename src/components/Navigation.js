import { NavLink } from "react-router-dom";
import React from 'react'
export default function NavBar() {
    return (
        <div class="navbar">
            <NavLink to="/">Home </NavLink>
            <NavLink to="/signup">Signup </NavLink>
            <NavLink to="/login">Login </NavLink>
            <NavLink to="/contact">Contact </NavLink>


        </div>
    )



}
