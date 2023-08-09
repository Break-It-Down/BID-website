import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/banner"

const AboutPage = () => (
  <Layout>
    <Banner/>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
