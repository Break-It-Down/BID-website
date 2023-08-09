import * as React from "react"
import { Link } from "gatsby"
import "../styles/upcomingEvents.css"
import eastCoast from "../images/pic07.jpg"
import westCoast from "../images/pic08.jpg"

const UpcomingEvents = () => (
    <div class="wrapper">
        <h2><strong>Upcoming Events</strong></h2>
        <h3>Every year, Break it Down is hosted in two cities, one on the west coast and one on the east coast. This year, it will be hosted in Los Angeles, California.</h3>
        <div class="row aln-center">
            <div class="col-4 col-12-mobile special">
                {/* Add links for schools once groups is created */}
                <a href="#" class="image featured"><img src={westCoast} alt="west coast host"/></a>
                <h3><a href="#">Gravida aliquam penatibus</a></h3>
                <p>
                    Amet nullam fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
                    porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
                </p>
            </div>
            <article class="col-4 col-12-mobile special">
                <a href="#" class="image featured"><img src={eastCoast} alt="east coast host" /></a>
                <h3><a href="#">Sed quis rhoncus placerat</a></h3>
                <p>
                    Amet nullam fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
                    porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
                </p>
            </article>
        </div>
    </div>
)

export default UpcomingEvents