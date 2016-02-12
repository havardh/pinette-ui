import React from "react";

import RadioActionCreators from '../actions/radio_action_creators';


export default class Radio extends React.Component {


  p1() { RadioActionCreators.call('p1'); }
  p2() { RadioActionCreators.call('p2'); }
  p2() { RadioActionCreators.call('p3'); }
  p13() { RadioActionCreators.call('p13'); }
  off() { RadioActionCreators.call('off'); }

  render() {
    return (
      <div className="tile yellow">
        <h2>Radio</h2>
        <div className="button-row">
          <button onClick={this.p1}>P1</button>
          <button onClick={this.p2}>P2</button>
          <button onClick={this.p3}>P3</button>
          <button onClick={this.p13}>P13</button>
          <button onClick={this.off}>Av</button>
        </div>
      </div>
    );
  }
}
