import * as React from "react"
import { Link } from "gatsby"
import "../styles/upcomingEvents.css"
import { StaticImage } from "gatsby-plugin-image"

const UpcomingEvents = () => (
    <div class="wrapper">
        <h2><strong>Upcoming Events</strong></h2>
        <h3>Every year, Break it Down is hosted in two cities, one on the west coast and one on the east coast.
            This year, it will be co-hosted by two groups in <font color="#ff5e69">Pittsburgh</font>.</h3>
        <div class="row aln-center">
            <div class="col-5 col-12-mobile special">
                <a href="/groups#hosts" class="image"><StaticImage src='../images/groups/UPitt.jpeg' class="hosts-photo"/></a>
                <h2 class="h2-banner"><a href="/groups">BIDsburgh</a></h2>
                <h3>
                    UPitt Mosaic <br/> -- <br/>
                    Pittsburgh, Pennsylvania <br/>
                    April 11, 2026 (TBD)
                </h3>
            </div>
            <div class="col-5 col-12-mobile special">
                <a href="/groups#hosts" class="image"><StaticImage src="../images/groups/CMU.JPG" class="hosts-photo"/></a>
                <h2 class="h2-banner"><a href="/groups">BIDsburgh</a></h2>
                <h3>
                    CMU Joyful Noise <br/> -- <br/>
                    Pittsburgh, Pennsylvania <br/>
                    April 11, 2026 (TBD)
                </h3>
            </div>
        </div>
    </div>
)

export default UpcomingEvents
