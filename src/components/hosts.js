import * as React from "react"
import { Link } from "gatsby"
import "../styles/upcomingEvents.css"
import eastCoast from "../images/pic07.jpg"
import westCoast from "../images/pic08.jpg"

const Hosts = () => (
    <div class="wrapper">
        <h2><strong>2023 Hosts</strong></h2>
        <div class="row aln-center">
            <div class="col-4 col-12-mobile special">
                <img src={westCoast} alt="west coast host"/>
                <h2 class="h2-banner"><a href="/groups">UCLA<br/>Road to Damascus</a></h2>
            </div>
            <article class="col-4 col-12-mobile special">
                <img src={eastCoast} alt="east coast host" />
                <h2 class="h2-banner"><a href="/groups">BiD?</a></h2>
            </article>
        </div>
    </div>
)

export default Hosts