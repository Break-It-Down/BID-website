import * as React from "react"
import { Link } from "gatsby"
import { Button } from "@mui/material"
import "../styles/banner.css"

const MeetGroups = () => (
    <div id="banner">
        <h2 class="h2-banner">Meet the Groups</h2>
        <h3>
        Comprised of 25 groups from all over the country, Break it Down etc.....
        </h3>   
        <a href="/groups"><Button class="banner-button">Groups</Button></a>    
    </div>
)

export default MeetGroups