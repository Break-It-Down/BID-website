import * as React from "react"
import { Link } from "gatsby"
import "../styles/navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

const Navbar = () => (
    <div>    
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
        <div className="navPanel">
            <a href="javascript:void(0);" class="icon" onclick={myFunction}>
                <FontAwesomeIcon icon={faBars} />
            </a>
        </div>
    </div>

    // <nav id="nav">
    //     <ul>
    //         <li><a href="/">Home</a></li>
    //         <li><a href="/about">About</a></li>
    //         <li><a href="/groups">Groups</a></li>
    //         {/* Add once pages are created */}
    //         {/* <li><a href="/archive">Archive</a></li> */}
    //         {/* <li><a href="/donate">Donate</a></li> */}
    //     </ul>
    // </nav>
)

export default Navbar