// @flow
/**
 * ReactCardFlipper
 * Author: Eric Stout, https://factor1studios.com
 *
 **/

import React, { Component, useState } from "react";
import "../styles/CardFlipper.css";

class ReactCardFlipper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
      );
  }
}

export default ReactCardFlipper;