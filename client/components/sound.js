import React from "react";

import SoundActionCreators from '../actions/sound_action_creators';

export default class Sound extends React.Component {

  mute() { SoundActionCreators.call('mute'); }
  unmute() { SoundActionCreators.call('unmute'); }
  up() { SoundActionCreators.call('up'); }
  down() { SoundActionCreators.call('down'); }

  render() {
    return (
      <div className="tile red">
        <h2>Sound</h2>

        <div>
          <input type="range"></input>
        </div>

        <div className="button-row">
          <button onClick={this.mute}>Av</button>
          <button onClick={this.unmute}>På</button>
          <button onClick={this.up}>+</button>
          <button onClick={this.down}>-</button>
        </div>
      </div>
    );
  }
}
