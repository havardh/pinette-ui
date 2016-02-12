import React from "react";

import SoundActionCreators from '../actions/sound_action_creators';

export default class Sound extends React.Component {

  mute() { SoundActionCreators.call('mute'); }
  unmute() { SoundActionCreators.call('unmute'); }
  up() { SoundActionCreators.call('up'); }
  down() { SoundActionCreators.call('down'); }

  render() {
    return (
      <div>
	      <h2>Sound</h2>
	      <button onClick={this.mute}>Mute</button>
	      <button onClick={this.unmute}>Unmute</button>
	      <button onClick={this.up}>+</button>
	      <button onClick={this.down}>-</button>
      </div>
    );
  }
}
