import * as React from "react"
import { Link } from "gatsby"
import { Button } from "@mui/material"
import "../styles/banner.css"

const MeetGroups = () => (
    <div id="banner">
        <h2 class="h2-banner">Meet the Groups</h2>
        <h3>
        Comprised of 25 groups from all over the country, Break it Down strives to 
        share the gospel and good news of Jesus Christ through this niche art of Christian a cappella.
        Check out the hosts and participants for this year's Break it Down!
        </h3>   
        <a href="/groups"><button class="button">Groups</button></a>    
    </div>
)

export default MeetGroups