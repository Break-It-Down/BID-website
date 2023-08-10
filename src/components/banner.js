import * as React from "react"
import { Link } from "gatsby"
import { Button } from "@mui/material"
import "../styles/banner.css"

const Banner = () => (
    <div id="banner">
        {/* <h2>Hi. You're looking at <strong>Helios</strong>.</h2> */}
        <h3>
        Break It Down (BiD) is a gathering of <b>20+ Christian a cappella</b> groups <u>across the country</u> to 
        unite together to <b>share the gospel of Jesus Christ</b> through music!
        </h3>   
        <a href="/about"><Button class="banner-button">Learn more!</Button></a>    
    </div>
)

export default Banner