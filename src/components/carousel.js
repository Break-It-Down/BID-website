import * as React from "react"
import { Link } from "gatsby"
import "../styles/carousel.css"
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { StaticImage } from "gatsby-plugin-image"
import PastEvents from "../content/pastEvents"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Feed past events content into divs
const pastEventsArray = [];
for (var i = 0; i < PastEvents.length; i ++) {
    let curr = PastEvents[i];
    pastEventsArray.push(
        <article>
            <div class="iframe-container">
                {curr.youtube ? 
                        <iframe class="responsive-iframe" src={curr.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    :
                    <a href="#" class="responsive-iframe"><StaticImage src="../images/pic01.jpg" alt="" /></a>
                }
            </div>
            <header>
                <h3>{curr.title}</h3>
            </header>
            <p>{curr.date} | {curr.school}<br/>{curr.host}</p>
        </article>
  );
}

// Carousel functionality
let currentFilter = 0;

const length = pastEventsArray.length;
// How many you want to see at a time
const offSet = 3;
const nextFilter = () => {
    currentFilter = currentFilter === length - 1 ? 0 : currentFilter + 1;
    console.log(currentFilter);
};

const prevFilter = () => {
    currentFilter = currentFilter === 0 ? length - 1 : currentFilter - 1;
    console.log(currentFilter);
};

const Carousel = () => (
    <div class="past-events-wrapper">
        <h2><strong>Past Events</strong></h2>
        <div class="carousel">
            {/* <ChevronLeftIcon class="backward" onClick={prevFilter}/> */}
            <div class="reel">
                {pastEventsArray}
                {/* {pastEventsArray.filter(
                    (d, i) => i >= currentFilter && i < currentFilter + offSet)} */}
            </div>
            {/* <ChevronRightIcon class="forward" onClick={nextFilter}/> */}
        </div>
    </div>
)

export default Carousel