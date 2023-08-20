import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hosts from "../components/hosts"
import Groups from "../content/groupInfo"
import Group from "../components/group"

import "../styles/upcomingEvents.css"

// Filter host and non-active groups
const grps = Groups.filter((group) => !group.host && group.active);

const groupRows = [];
for (var i = 0; i < grps.length; i += 4) {
  let rowGroups = grps.slice(i, i+4);
  groupRows.push(
    <div className='row aln-center' style={{margin: "0px auto 20px auto"}}>
      {rowGroups.map(group => <Group group={group} />)}
    </div>
  );
}

const GroupsPage = () => (
  <Layout>
    <Hosts/>
    <div class="wrapper">
      <h2><strong>The Groups</strong></h2>
      {groupRows}
    </div>
  </Layout>
)

export const Head = () => <Seo title="Groups" />

export default GroupsPage
