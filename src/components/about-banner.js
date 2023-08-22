import * as React from "react"
import { Link } from "gatsby"
import { Button, Divider } from "@mui/material"
import "../styles/banner.css"

const AboutBanner = () => (
    <div id="banner">
        <h3>
        Break it Down (BiD) is an annual conference, where 20+ Christian a cappella groups from across the nation come together to proclaim the glory of God. 
        Through God’s faithfulness, we’ve been able to experience the beauty of coming together with brothers and sisters to glorify the Lord with one voice, 
        as well as expand BiD from a Boston-based event to a nationwide one with chapters on the east and west coasts. 
        </h3>

        <Divider light> </Divider>

        <h3>
        Now may the God who gives perseverance and encouragement grant you to be of the same mind with one another, 
        according to Christ Jesus, so that with one purpose and one voice you may glorify the God and Father of our Lord Jesus Christ.
        - <b>Romans 15:5-6</b>
        </h3>
    </div>
)

export default AboutBanner