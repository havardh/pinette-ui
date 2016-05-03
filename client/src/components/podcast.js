import React from 'react';

import PodcastActionCreator from '../actions/podcast_action_creator';
import { StatusIndicator } from './status';

export default class Podcast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.onStoreChanged());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStoreChanged() {
    const { store } = this.props;
    this.setState(store.getState().podcast);
  }

  onChange({ target }) {
    const { store } = this.props;
    const name = target.value;
    PodcastActionCreator.setFile(name)(store.dispatch.bind(store));
  }

  start() {
    const { store } = this.props;
    PodcastActionCreator.start(this.state.file)(store.dispatch.bind(store));
  }

  stop() {
    const { store } = this.props;
    PodcastActionCreator.stop()(store.dispatch.bind(store));
  }

  render() {
    const { status, file } = this.state;

    return (
      <div className="tile blue">
        <h2>Podcast</h2>
        <StatusIndicator on={status} />
        <br />

        <input
          value={file}
          onChange={this.onChange.bind(this)}
        />

        <div className="button-row">
          <button onClick={this.start.bind(this)}>Play</button>
          <button onClick={this.stop.bind(this)}>Stopp</button>
        </div>
      </div>
    );
  }
}

Podcast.propTypes = {
  store: React.PropTypes.object,
};
