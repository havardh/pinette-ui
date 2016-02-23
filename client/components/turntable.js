import React from "react";

import TurntableActionCreators from '../actions/turntable_action_creators';
import {StatusIndicator} from './status'

export default class Turntable extends React.Component {

  on() { TurntableActionCreators.call('on'); }
  off() { TurntableActionCreators.call('off'); }

  render() {
    return (
      <div className="tile black">
        <h2>Platespiller</h2>
        <div className="button-row">
          <button onClick={this.on}>På</button>
          <button onClick={this.off}>Av</button>
        </div>
      </div>
    );
  };

}
