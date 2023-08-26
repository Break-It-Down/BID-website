import * as React from "react"
import { Link } from "gatsby"
import "../styles/carousel.css"
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { StaticImage } from "gatsby-plugin-image"
import PastEvents from "../content/pastEvents"

// Feed past events content into divs
const pastEventsArray = [];
for (var i = 0; i < PastEvents.length; i ++) {
    let curr = PastEvents[i];
    pastEventsArray.push(
        <article>
            <div className="iframe-container">
                {curr.youtube ? 
                        <iframe className="responsive-iframe" src={curr.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    :
                    <div className="responsive-iframe"><StaticImage src="../images/pic01.jpg"/></div>
                }
            </div>
            <header>
                <h3>{curr.title}</h3>
            </header>
            <p>{curr.date} | {curr.school}<br/>{curr.host}</p>
        </article>
  );
}

const Carousel = () => (
    <div className="past-events-wrapper">
        <h2><strong>Past Events</strong></h2>
        <div className="carousel">
            <div className="reel">
                {pastEventsArray}
            </div>
        </div>
    </div>
)

export default Carousel