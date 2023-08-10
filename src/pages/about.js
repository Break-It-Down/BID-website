import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutBanner from "../components/about-banner"
import MissionVision from "../components/mission-vision"
import MeetGroups from "../components/meet-groups-banner"

const AboutPage = () => (
  <Layout>
    <AboutBanner/>
    <MissionVision/>
    <MeetGroups/>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
