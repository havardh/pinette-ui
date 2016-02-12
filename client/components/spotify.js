import React from "react";

import * as SpotifyActionCreators from "../actions/spotify_action_creators";

export default class Spotify extends React.Component {

  constructor(props) {
    super(props);
  }

  on() {
    SpotifyActionCreators.on();
  }

  off () {
    SpotifyActionCreators.off();
  }

  render() {
    return (
      <div>
        <h2>Spotify</h2>
        <button onClick={this.on.bind(this)}>På</button>
        <button onClick={this.off.bind(this)}>Av</button>
      </div>
    );
  }

}