import * as React from "react";
import Seo from "../components/seo";
// import * as styles from "../components/index.module.css"
import "../styles/index.module.css";
import Header from "../components/header";
import Banner from "../components/banner";
import Carousel from "../components/carousel";
import UpcomingEvents from "../components/upcomingEvents";
import Footer from "../components/footer";
import Layout from "../components/layout";
import NumbersBanner from "../components/numbers-banner";
import { useEffect } from "react";

/*
	Helios by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

const IndexPage = () => {
  return (
    <div>
      <Header home="true" />
      <Banner />
      <UpcomingEvents />
      <NumbersBanner />
      <Carousel />
      <Footer />
    </div>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
