import React from "react";

import SoundActionCreators from '../actions/sound_action_creators';
import {StatusIndicator} from './status'

export default class Sound extends React.Component {

  constructor(props) {
    super(props);

    const {store} = props;
    this.state = store.getState().sound;

    this.dispatch = store.dispatch.bind(store);
  }

  componentDidMount() {
    const {store} = this.props;

    SoundActionCreators.getVolume()(store.dispatch.bind(store));
    SoundActionCreators.ismute()(store.dispatch.bind(store));

    this.unsubscribe = store.subscribe(() => this.onStoreChanged());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStoreChanged() {
    const {store} = this.props;
    this.setState(store.getState().sound);
  }

  mute() {
    const {store} = this.props;
    SoundActionCreators.call('mute')(store.dispatch.bind(store));
  }

  unmute() {
    const {store} = this.props;
    SoundActionCreators.call('unmute')(store.dispatch.bind(store));
  }

  up() {
    const {store} = this.props;
    SoundActionCreators.up()(store.dispatch.bind(store));
  }

  down() {
    const {store} = this.props;
    SoundActionCreators.down()(store.dispatch.bind(store));
  }

  onVolumeChange(event) {
    const {store} = this.props;
    SoundActionCreators.setVolume(event.target.value)(store.dispatch.bind(store));
  }

  render() {
    const {volume, on} = this.state;

    return (
      <div className="tile red">
        <h2>Sound</h2>

        <StatusIndicator on={on} />

        <div>
          <input type="range" min="50" max="100" step="0.1"
            value={volume}
            onInput={this.onVolumeChange.bind(this)}>
          </input>
        </div>

        <div className="button-row">
          <button onClick={this.unmute.bind(this)}>På</button>
          <button onClick={this.mute.bind(this)}>Av</button>
          <button onClick={this.up.bind(this)}>+</button>
          <button onClick={this.down.bind(this)}>-</button>
        </div>
      </div>
    );
  }
}
