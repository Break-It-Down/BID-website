import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar.js"
import { Carousel } from 'react-responsive-carousel';
import "../styles/header.css"
import { StaticImage } from "gatsby-plugin-image";

const Header = ({home}) => (
  home ? 
    <div id="header" style={{height: "100vh", backgroundPosition: "center"}}>
        <div class="inner">
          <h1><strong>break. it. down.</strong></h1>
        </div>
        <Navbar/>
    </div>
  // <div id="header" style={{height: "100vh", backgroundPosition: "center"}}>
  //     <div class="inner">
  //       <h1><strong>break. it. down.</strong></h1>
  //     </div>
  //     <Navbar/>
  // </div>
  :
  <div id="header">
      <div class="inner">
        <h1><strong>break. it. down.</strong></h1>
      </div>
      <Navbar/>
  </div>
)

export default Header