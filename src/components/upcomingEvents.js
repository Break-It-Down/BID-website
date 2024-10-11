import * as React from "react"
import { Link } from "gatsby"
import "../styles/upcomingEvents.css"
import { StaticImage } from "gatsby-plugin-image"

const UpcomingEvents = () => (
    <div class="wrapper">
        <h2><strong>Upcoming Events</strong></h2>
        <h3>Every year, Break it Down is hosted in two cities, one on the west coast and one on the east coast. 
            This year, it will be hosted in <font color="#ff5e69">Boston, Massachussets</font> and <font color="#ff5e69">Stanford, California</font>.</h3>
        <div class="row aln-center">
            <div class="col-5 col-12-mobile special">
                <a href="/groups#hosts" class="image"><StaticImage src="../images/groups/MIT.jpg" class="hosts-photo"/></a>
                <h2 class="h2-banner"><a href="/groups">BiDB</a></h2>
                <h3>
                MIT Cross Products <br/> -- <br/>
                Boston, Massachussets <br/>
                April 5, 2024
                </h3>
            </div>
            <div class="col-5 col-12-mobile special">
                <a href="/groups#hosts" class="image"><StaticImage src='../images/groups/Testimony.jpg' class="hosts-photo"/></a>
                <h2 class="h2-banner"><a href="/groups">BiDS</a></h2>
                <h3>
                Stanford Testimony <br/> -- <br/>
                Stanford, California <br/>
                April 12, 2024
                </h3>
            </div>
        </div>
    </div>
)

export default UpcomingEvents