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

    const components = {
      sound: (<Sound store={store} />),
      turntable: (<Turntable store={store} />),
      radio: (<Radio />),
      spotify: (<Spotify store={store} />),
      podcast: (<Podcast store={store} />)
    };

    const active = ["spotify","sound","radio"];

    return (
      <div className="tile-container">
        {active.map(key => components[key])}
      </div>
    );
  }

}

App.propTypes = {
  store: React.PropTypes.object,
};
