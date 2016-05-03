import React from 'react';

import Sound from './sound';
import Turntable from './turntable';
import Radio from './radio';
import Spotify from './spotify';
import Podcast from './podcast';


/* eslint-disable react/prefer-stateless-function */
export default class App extends React.Component {

  render() {
    const { store } = this.props;

    return (
      <div className="tile-container">
        <Sound store={store} />
        <Turntable store={store} />
        <Radio />
        <Spotify store={store} />
        <Podcast store={store} />
      </div>
    );
  }

}

App.propTypes = {
  store: React.PropTypes.object,
};
