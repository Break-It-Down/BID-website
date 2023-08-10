import * as React from "react"
import { Link } from "gatsby"
import "../styles/upcomingEvents.css"
import eastCoast from "../images/pic07.jpg"
import westCoast from "../images/pic08.jpg"

const UpcomingEvents = () => (
    <div class="wrapper">
        <h2><strong>Upcoming Events</strong></h2>
        <h3>Every year, Break it Down is hosted in two cities, one on the west coast and one on the east coast. 
            This year, it will be hosted in Los Angeles, California.</h3>
        <div class="row aln-center">
            <div class="col-4 col-12-mobile special">
                {/* Add links for schools once groups is created */}
                <a href="#" class="image featured"><img src={westCoast} alt="west coast host"/></a>
                <h2 class="h2-banner"><a href="/groups">BiDLA</a></h2>
                <h3>
                Host: UCLA Road to Damascus <br/>
                Location: Los Angeles, California <br/>
                Date: TBD
                </h3>
            </div>
            <article class="col-4 col-12-mobile special">
                <a href="#" class="image featured"><img src={eastCoast} alt="east coast host" /></a>
                <h2 class="h2-banner"><a href="/groups">BiD?</a></h2>
                <h3>
                Host: Could be your group! <br/>Message us if you’re interested! <br/>
                Location: TBD <br/>
                Date: TBD
                </h3>
            </article>
        </div>
    </div>
)

export default UpcomingEvents