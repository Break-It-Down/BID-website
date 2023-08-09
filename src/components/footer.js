import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faSpotify,
  faTiktok
} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import "../styles/footer.css"


const Footer = () => (
    <div id="footer">
        <div class="row">
        <div class="col-12">
                <section class="contact">
                    <header>
                        <h3>Nisl turpis nascetur interdum?</h3>
                    </header>
                    <ul class="icons">
                        <li><a href="#" class="icon brands"><FontAwesomeIcon icon={faEnvelope} size="1x" /></a></li>
                        <li><a href="#" class="icon brands"><FontAwesomeIcon icon={faFacebookF} style={{color: "#ffffff",}} size="1x" /></a></li>
                        <li><a href="#" class="icon brands"><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} size="1x" /></a></li>
                        <li><a href="#" class="icon brands"><FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff",}} size="1x" /></a></li>
                        <li><a href="#" class="icon brands"><FontAwesomeIcon icon={faSpotify} style={{color: "#ffffff",}} size="1x" /></a></li>
                        <li><a href="#" class="icon brands"><FontAwesomeIcon icon={faTiktok} style={{color: "#ffffff",}} size="1x" /></a></li>
                    </ul>
                </section>

                {/* <div class="copyright">
                    <ul class="menu">
                        <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div> */}
        </div>
    </div>
    </div>
)

export default Footer
