import React from "react";
import logo from "../images/navbar/logo_chef.png"

export default function Navbar() {
    return (
        <div className="navbar_container">
            <img className="nav_logo" src={logo} alt="logo" />
            <ul className="nav_list">
                <li>Home</li>
                <li>Recipe</li>
                <li>Favorite</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}