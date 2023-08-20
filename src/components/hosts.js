import * as React from "react"
import { Link } from "gatsby"
import "../styles/upcomingEvents.css"
import Groups from "../content/groupInfo"
import Group from "../components/group"

const grps = Groups.filter((group) => group.host && group.active);

const Hosts = () => (
    <div class="wrapper">
        <h2><strong>2023 Hosts</strong></h2>
        <Group group={grps.at(0)} />
        {/* Add below if second host */}
        {/* <Group group={grps.at(1)} /> */}
    </div>
)

export default Hosts