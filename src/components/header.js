import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar.js"
import "../styles/header.css"

const Header = () => (
  <div id="header">
      <div class="inner">
        <h1><strong>break. it. down.</strong></h1>
      </div>
      <Navbar/>
  </div>
)

export default Header