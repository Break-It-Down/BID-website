import * as React from "react"
import { Link } from "gatsby"
import "../styles/upcomingEvents.css"

const Group = ({group}) => (
    <div class="col-2 col-12-mobile special group">
        {group.groupPhoto}
        <h4 class="h4-banner">{group.school}<br/>{group.group}</h4>
    </div>
)

export default Group
