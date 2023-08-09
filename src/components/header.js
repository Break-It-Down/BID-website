import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar.js"
import "./header.css"

const Header = ({ siteTitle }) => (
  <div id="header">
      <div class="inner">
        <h1>Break. It. Down.</h1>
      </div>
      <Navbar/>
  </div>
)

export default Header