import React, { Component } from 'react';
import './slide.css'

class Slide extends Component {
  render() {
    return (
      <div className="panels">
        <div className="panel panel1" />
        <div className="panel panel2" />
        <div className="panel panel3" />
        <div className="panel panel4" />
        <div className="panel panel5" />
      </div>
    );
  }
}

export default Slide;
