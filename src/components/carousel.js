import * as React from "react"
import { Link } from "gatsby"
import "../styles/carousel.css"
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { StaticImage } from "gatsby-plugin-image"
import PastEvents from "../content/pastEvents"

const pastEventsArray = [];
for (var i = 0; i < PastEvents.length; i ++) {
    let curr = PastEvents[i];
    pastEventsArray.push(
        <article>
            <a href="#" class="image featured"><StaticImage src="../images/pic01.jpg" alt="" /></a>
                <header>
                    <h3>{curr.title}</h3>
                </header>
                <p>{curr.date} | {curr.school}<br/>{curr.host}</p>
        </article>
  );
}

const Carousel = () => (
    <div class="carousel">
        <div class="reel">
            {pastEventsArray}
        </div>
    </div>
)

export default Carousel