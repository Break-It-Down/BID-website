import * as React from "react"
import { Link } from "gatsby"
import "../styles/upcomingEvents.css"
import { StaticImage } from "gatsby-plugin-image"

const UpcomingEvents = () => (
    <div class="wrapper">
        <h2><strong>Upcoming Events</strong></h2>
        <h3>Every year, Break it Down is hosted in two cities, one on the west coast and one on the east coast. 
            This year, it will be hosted in <font color="#ff5e69">Los Angeles, California</font>.</h3>
        <div class="row aln-center">
            <div class="col-5 col-12-mobile special">
                {/* Add links for schools once groups is created */}
                <a href="/groups#hosts" class="image"><StaticImage src="../images/pic08.jpg"/></a>
                <h2 class="h2-banner"><a href="/groups">BiDLA</a></h2>
                <h3>
                UCLA Road to Damascus <br/> -- <br/>
                Los Angeles, California <br/>
                April 13, 2023
                </h3>
            </div>
            <div class="col-5 col-12-mobile special">
                <a href="/groups#hosts" class="image"><StaticImage src="../images/pic07.jpg"/></a>
                <h2 class="h2-banner"><a href="/groups">BiD?</a></h2>
                <h3>
                Host: Could be your group! <br/>Message us if you’re interested!
                </h3>
            </div>
        </div>
    </div>
)

export default UpcomingEvents