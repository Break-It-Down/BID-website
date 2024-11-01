import React, { useState, useEffect } from "react"
import Navbar from "./navbar.js"
import "../styles/header.css"
import { HeaderImages } from "../content/slideshowImages";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Header = ({home}) => { 
  return(
    home ?
      <div id="header">
        <div className="slide-container">
            <Slide arrows={false}>
            {HeaderImages.map((slideImage, index)=> (
                <div key={index}>
                  <div id="homeDiv" style={{'backgroundImage': `url(${slideImage})`}}/>
                </div>
              ))} 
            </Slide>
        </div>
        <div id="inner">
          <h1><strong>break. it. down.</strong></h1>
        </div>
        <Navbar/>
      </div>
      :
      <div id="header">
        <div className="slide-container">
            <Slide arrows={false}>
            {HeaderImages.map((slideImage, index)=> (
                <div key={index}>
                  <div id="pageDiv" style={{'backgroundImage': `url(${slideImage})`}}/>
                </div>
              ))} 
            </Slide>
        </div>
        <Navbar/>
      </div>
)}


export default Header