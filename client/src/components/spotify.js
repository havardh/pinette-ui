import React from 'react';

import * as SpotifyActionCreators from '../actions/spotify_action_creators';
import { StatusIndicator } from './status';

export default class Spotify extends React.Component {

  constructor(props) {
    super(props);

    const { store } = props;
    this.state = store.getState().spotify;

    this.dispatch = store.dispatch.bind(store);
  }

  componentDidMount() {
    const { store } = this.props;

    SpotifyActionCreators.status()(this.dispatch);

    this.unsubscribe = store.subscribe(() => this.onStoreChanged());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStoreChanged() {
    const { store } = this.props;
    this.setState(store.getState().spotify);
  }

  on() {
    SpotifyActionCreators.on()(this.dispatch);
  }

  off() {
    SpotifyActionCreators.off()(this.dispatch);
  }

  render() {
    const { on } = this.state;

    return (
      <div className="tile green">
        <h2>Spotify</h2>
        <StatusIndicator on={on} />
        <div className="button-row">
          <button onClick={this.on.bind(this)}>På</button>
          <button onClick={this.off.bind(this)}>Av</button>
        </div>
      </div>
    );
  }

}

Spotify.propTypes = {
  store: React.PropTypes.object,
};
