// @flow
/**
 * ReactCardFlipper
 * Author: Eric Stout, https://factor1studios.com
 *
 **/

import React, { Component, useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../styles/CardFlipper.css";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";

class ReactCardFlipper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false
    };
  }

  handleFlip = () => {
    this.setState(state => ({
      isFlipped: !state.isFlipped
    }));
  };

  render() {
    const { isFlipped } = this.state;

    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {this.props.children[0]}
          </div>
          <div className="flip-card-back">
            {this.props.children[1]}
          </div>
        </div>
      </div>

    
      // <div className="rcf-container"

      //   style={{width: this.props.width, height: this.props.height}}
        
      //   onMouseEnter={() => {
      //     this.handleFlip();
      //   }}
      //   onMouseLeave={() => {
      //     this.handleFlip();
      //   }}
      // >
      //   <div className="rcf-flipper">
      //     <div className="rcf-front">
      //       {!isFlipped ? this.props.children[0] : null}
      //       {/* {this.props.children[0]} */}
      //     </div>
      //     <div className="rcf-back">
      //       {/* {isFlipped ? this.props.children[1] : null} */}
      //       {this.props.children[1]}
      //     </div>
      //   </div>
      // </div>
      );
  }
}

export default ReactCardFlipper;