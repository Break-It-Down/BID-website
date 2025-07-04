import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faSpotify,
  faTiktok,
  faLink,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/footer.css";

const Footer = () => (
  <div id="footer">
    <div class="row">
      <div class="col-12">
        <section class="contact">
          <header>
            <h3>Stay Connected!</h3>
          </header>
          <ul class="icons">
            <li>
              <a href="mailto:breakitdown.uni@gmail.com" class="icon brands">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@breakitdownorg"
                class="icon brands"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/breakitdownorg/"
                class="icon brands"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@breakitdownorg" class="icon brands">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/user/31bujkc5eva2iqieamcmi5wfuw4i" class="icon brands">
                <FontAwesomeIcon icon={faSpotify} />
              </a>
            </li>
            <li>
              <a href="https://linktr.ee/breakitdownorg" class="icon brands">
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
          </ul>
        </section>

        <div class="copyright">
          <a href="#">&copy; Break it Down {new Date().getFullYear()}</a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
