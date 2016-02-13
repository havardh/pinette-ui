import React from "react";

import SoundActionCreators from '../actions/sound_action_creators';

export default class Sound extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.store.getState().sound;
  }

  componentDidMount() {
    const {store} = this.props;

    SoundActionCreators.getVolume()(store.dispatch.bind(store));

    this.unsubscribe = store.subscribe(() => this.onStoreChanged());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStoreChanged() {
    const {store} = this.props;
    this.setState(store.getState().sound);
  }

  mute() { SoundActionCreators.call('mute'); }
  unmute() { SoundActionCreators.call('unmute'); }
  up() { SoundActionCreators.call('up'); }
  down() { SoundActionCreators.call('down'); }

  onVolumeChange(event) {
    const {store} = this.props;
    SoundActionCreators.setVolume(event.target.value)(store.dispatch.bind(store));
  }

  render() {
    const {volume} = this.state;
    console.log(volume);
    return (
      <div className="tile red">
        <h2>Sound</h2>

        <div>
          <input type="range" min="0" max="100" step="1"
            value={volume}
            onInput={this.onVolumeChange.bind(this)}>
          </input>
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
