import * as React from "react"
import { Link } from "gatsby"
import "../styles/navbar.css"

const Navbar = () => (
    <nav id="nav">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/groups">Groups</a></li>
            {/* Add once pages are created */}
            {/* <li><a href="/archive">Archive</a></li> */}
            {/* <li><a href="/donate">Donate</a></li> */}
        </ul>
    </nav>
)

export default Navbar