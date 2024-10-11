import * as React from "react"
import { Link } from "gatsby"
import "../styles/navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// import { NavLink } from 'react';
// import { NavLink } from 'react-router-dom'

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function handleShowNavbar() {
//     var x = document.getElementById("nav-elements");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showNavbar: false };
      }

    handleShowNavbar = () => {
        this.setState({showNavbar: !this.state.showNavbar})
        var x = document.getElementById("menu-icon")
        if (x.style.color === "white") {
            x.style.color = "#242F6B"
        } else {
            x.style.color = "white"
        }
    }

    render() {
        return (
            <nav className="navbar">
                <div className="logo">

                </div>
                <div id="menu-icon" className="menu-icon" onClick={this.handleShowNavbar} style={{color: "white"}}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={`nav-elements  ${this.state.showNavbar && 'active'}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/groups">Groups</a></li>
                </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;