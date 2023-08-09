import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import UpcomingEvents from "../components/upcomingEvents"

const GroupsPage = () => (
  <Layout>
    <UpcomingEvents/>
  </Layout>
)

export const Head = () => <Seo title="Groups" />

export default GroupsPage
