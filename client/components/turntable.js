import React from "react";

import TurntableActionCreators from '../actions/turntable_action_creators';

export default class Turntable extends React.Component {

  on() { TurntableActionCreators.call('on'); }
  off() { TurntableActionCreators.call('off'); }

  render() {
    return (
      <div>
       	<h2>Platespiller</h2>
       	<button onClick={this.on}>På</button>
       	<button onClick={this.off}>Av</button>
      </div>
    );
  };

}
