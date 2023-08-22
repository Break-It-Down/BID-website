import * as React from "react"
import { Link } from "gatsby"
import "../styles/upcomingEvents.css"
import { StaticImage } from "gatsby-plugin-image"

const UpcomingEvents = () => (
    <div class="wrapper">
        <h2><strong>Upcoming Events</strong></h2>
        <h3>Every year, Break it Down is hosted in two cities, one on the west coast and one on the east coast. 
            This year, it will be hosted in Los Angeles, California.</h3>
        <div class="row aln-center">
            <div class="col-4 col-12-mobile special">
                {/* Add links for schools once groups is created */}
                <a href="/groups#hosts" class="image featured"><StaticImage src="../images/pic08.jpg"/></a>
                <h2 class="h2-banner"><a href="/groups">BiDLA</a></h2>
                <h3>
                Host: UCLA Road to Damascus <br/>
                Location: Los Angeles, California <br/>
                Date: TBD
                </h3>
            </div>
            <div class="col-4 col-12-mobile special">
                <a href="/groups#hosts" class="image featured"><StaticImage src="../images/pic07.jpg"/></a>
                <h2 class="h2-banner"><a href="/groups">BiD?</a></h2>
                <h3>
                Host: Could be your group! <br/>Message us if you’re interested! <br/>
                Location: TBD <br/>
                Date: TBD
                </h3>
            </div>
        </div>
    </div>
)

export default UpcomingEvents