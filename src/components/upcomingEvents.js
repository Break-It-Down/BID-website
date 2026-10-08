import * as React from "react";
import { Link } from "gatsby";
import "../styles/upcomingEvents.css";
import { StaticImage } from "gatsby-plugin-image";

const UpcomingEvents = () => (
  <div class="wrapper">
    <h2>
      <strong>Upcoming Events</strong>
    </h2>
    <h3>
      For the 2026-27 academic year, Break it Down will be hosted by{" "}
      <font color="#ff5e69">For Christ's Sake</font> in{" "}
      <font color="#ff5e69">Berkeley</font>.
    </h3>
    <div class="row aln-center">
      <div class="col-5 col-12-mobile special">
        <a href="/groups#hosts" class="image">
          <StaticImage
            src="../images/groups/UC Berkeley.jpg"
            class="hosts-photo"
          />
        </a>
      </div>
    </div>
    <div class="row aln-center">
      <div class="col-5 col-12-mobile special">
        <h2 class="h2-banner">
          <a href="/groups">
            BIDB
            <br />
            (Break it Down Berkeley)
          </a>
        </h2>
        <h3>
          For Christ's Sake <br /> -- <br />
          Berkeley, California <br />
          April 9-11, 2027
        </h3>
      </div>
    </div>
  </div>
);

export default UpcomingEvents;
