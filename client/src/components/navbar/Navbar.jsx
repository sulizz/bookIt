import React from "react";
import "./navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <span className="logo">BOOKIT.COM</span>
                <div className="navItems">
                    <button className="navButton">Login</button>
                    <button className="navButton">Register</button>
                </div>
            </div>
        </div>
    );
};
