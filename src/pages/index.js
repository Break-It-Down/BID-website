import * as React from "react"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
import "../styles/index.module.css"
import Header from "../components/header"
import Banner from "../components/banner"
import Carousel from "../components/carousel"
import UpcomingEvents from "../components/upcomingEvents"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Header/>
	<Banner/>
	{/* <Carousel/> */}
	<UpcomingEvents/>
	<Footer/>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
