import React, { Component } from "react";
import logo from "../../cityTourImg.png";
import "./navbar.css";
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <img
                    src={logo}
                    alt="City Tour Logo"
                    className="navbar-img"
                ></img>
                <ul className="nav-links">
                    <li>
                        <a href="/" className="navbar-link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/" className="navbar-link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/" className="navbar-link active">
                            Tours
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
