import * as React from "react"
import { Link } from "gatsby"
import ReactCardFlipper from "react-card-flipper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faYoutube,
    faSpotify,
    faTiktok
  } from '@fortawesome/free-brands-svg-icons'
  import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import "../styles/group.css";

const Group = ({group}) => (
    group.host ?
        <div class="host-card-flipper">
            <ReactCardFlipper width="300px" height="300px" behavior="hover">
                <div class="host-card">
                    { group.logo != "" ? group.logo : <div class="group-logo"></div>}
                    <h4 class="h4-banner">{group.school}<br/>{group.group}</h4>
                </div>
                <div class="host-card"> 
                    { group.groupPhoto != "" ? group.groupPhoto : <div class="group-photo"></div>}
                    <div>
                    <div class="icons">
                        <a href="mailto:breakitdown.uni@gmail.com" class="icon brands"><FontAwesomeIcon icon={faEnvelope} size="1x" /></a>
                        <a href="https://www.tiktok.com/@breakitdownorg" class="icon brands"><FontAwesomeIcon icon={faTiktok} size="1x" /></a>
                        <a href="https://www.instagram.com/breakitdownorg/" class="icon brands"><FontAwesomeIcon icon={faInstagram} size="1x" /></a>
                        <a href="https://www.youtube.com/" class="icon brands"><FontAwesomeIcon icon={faYoutube} size="1x" /></a>
                    </div>
                    </div>
                </div>
            </ReactCardFlipper>
        </div>
    :
        <div class="card-flipper">
            <ReactCardFlipper width="200px" height="200px" behavior="hover">
                <div class="card">
                    { group.logo != "" ? group.logo : <div class="group-logo"></div>}
                    <h4 class="h4-banner">{group.school}<br/>{group.group}</h4>
                </div>
                <div class="card"> 
                    { group.groupPhoto != "" ? group.groupPhoto : <div class="group-photo"></div>}
                    <div>
                    <div class="icons">
                        <a href="mailto:breakitdown.uni@gmail.com" class="icon brands"><FontAwesomeIcon icon={faEnvelope} size="1x" /></a>
                        <a href="https://www.tiktok.com/@breakitdownorg" class="icon brands"><FontAwesomeIcon icon={faTiktok} size="1x" /></a>
                        <a href="https://www.instagram.com/breakitdownorg/" class="icon brands"><FontAwesomeIcon icon={faInstagram} size="1x" /></a>
                        <a href="https://www.youtube.com/" class="icon brands"><FontAwesomeIcon icon={faYoutube} size="1x" /></a>
                    </div>
                    </div>
                </div>
            </ReactCardFlipper>
        </div>
)

export default Group
