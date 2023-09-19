import * as React from "react"
import { Link } from "gatsby"
// import ReactCardFlipper from "react-card-flipper";
import ReactCardFlipper from "../components/CardFlipper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faTiktok
  } from '@fortawesome/free-brands-svg-icons'
  import {faEnvelope, faGlobe} from '@fortawesome/free-solid-svg-icons'
import "../styles/group.css";
import { StaticImage } from "gatsby-plugin-image";

const Group = ({group}) => (
    group.host ?
        <div class="host-card-flipper">
            <ReactCardFlipper width="300px" height="300px">
                <div class="host-card">
                    { group.logo != "" ? group.logo : <div class="host-logo"></div>}
                    <h4 class="h4-banner">{group.school}<br/>{group.group}</h4>
                </div>
                <div class="host-card"> 
                    { group.groupPhoto != "" ? group.groupPhoto : <div class="host-photo"></div>}
                    <div class="icons">
                        {group.media.email ? <a href={"mailto:" + group.media.email} class="icon brands"><FontAwesomeIcon icon={faEnvelope} size="1x" /></a> : null }
                        {group.media.website ? <a href={group.media.website} class="icon brands"><FontAwesomeIcon icon={faGlobe} size="1x" /></a> : null }
                        {group.media.facebook ? <a href={group.media.facebook} class="icon brands"><FontAwesomeIcon icon={faFacebookF} size="1x" /></a> : null }
                        {group.media.instagram ? <a href={group.media.instagram} class="icon brands"><FontAwesomeIcon icon={faInstagram} size="1x" /></a> : null }
                        {group.media.tiktok ? <a href={group.media.tiktok} class="icon brands"><FontAwesomeIcon icon={faTiktok} size="1x" /></a> : null }
                    </div>
                </div>
            </ReactCardFlipper>
        </div>
    :
        <div class="card-flipper">
            <ReactCardFlipper width="200px" height="200px">
                <div class="card">
                    { group.logo != "" ? group.logo : <div class="group-logo"></div>}
                    <h4 class="h4-banner">{group.school}<br/>{group.group}</h4>
                </div>
                <div class="card"> 
                    { group.groupPhoto != "" ? group.groupPhoto : <div class="group-photo"></div>}
                    <div class="icons">
                        {group.media.email ? <a href={"mailto:" + group.media.email} class="icon brands"><FontAwesomeIcon icon={faEnvelope} size="1x" /></a> : null }
                        {group.media.website ? <a href={group.media.website} class="icon brands"><FontAwesomeIcon icon={faGlobe} size="1x" /></a> : null }
                        {group.media.facebook ? <a href={group.media.facebook} class="icon brands"><FontAwesomeIcon icon={faFacebookF} size="1x" /></a> : null }
                        {group.media.instagram ? <a href={group.media.instagram} class="icon brands"><FontAwesomeIcon icon={faInstagram} size="1x" /></a> : null }
                        {group.media.tiktok ? <a href={group.media.tiktok} class="icon brands"><FontAwesomeIcon icon={faTiktok} size="1x" /></a> : null }
                    </div>
                </div>
            </ReactCardFlipper>
        </div>
)

export default Group