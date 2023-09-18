import * as React from "react"
import { Link } from "gatsby"
import "../styles/upcomingEvents.css"
import Groups from "../content/groupInfo"
import Group from "../components/group"

const grps = Groups.filter((group) => group.host && group.active);

const Hosts = () => (
    <div id="hosts" class="wrapper">
        <h2><strong>2023 Hosts</strong></h2>
        <div className='row aln-center' style={{margin: "0px 20px 40px 20px"}}>
            <div class="col-12-mobile special">
                <Group group={grps.at(0)} />
            </div>
            <div class="col-12-mobile special">
                <Group group={grps.at(1)} />
            </div>
      </div>
    </div>
)

export default Hosts