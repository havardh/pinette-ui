import _ from "lodash";
import React from "react";

import PodcastActionCreator from "../actions/podcast_action_creator";
import PodcastList from "./podcast_list";

export default class Podcast extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {store} = this.props;

    PodcastActionCreator.fetchPodcasts()(store.dispatch.bind(store));

    this.unsubscribe = store.subscribe(() => this.onStoreChanged());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStoreChanged() {
    const {store} = this.props;
    this.setState(store.getState().podcast);
  }

  play() {
    const {store} = this.props;
    PodcastActionCreator.resume()(store.dispatch.bind(store));
  }

  pause() {
    const {store} = this.props;
    PodcastActionCreator.pause()(store.dispatch.bind(store));
  }

  stop() {
    const {store} = this.props;
    PodcastActionCreator.stop()(store.dispatch.bind(store));
  }

  onFileClicked(file) {
    const {store} = this.props;
    PodcastActionCreator.start(file)(store.dispatch.bind(store));
  }

  render() {
    const {files, status} = this.state || {files: []};

    return (
      <div className="tile long blue">
        <h2>Podcast</h2>
        <div>
        {_.get(this.state, "nowPlaying.fileName")}
          <span> ({_.get(this.state, "nowPlaying.duration")})</span>
          <span> {status}</span>
        </div>
        <div className="button-row">
          <button onClick={this.play.bind(this)}>Play</button>
          <button onClick={this.pause.bind(this)}>Pause</button>
          <button onClick={this.stop.bind(this)}>Stopp</button>
        </div>

        <PodcastList
          files={files}
          onFileClicked={this.onFileClicked.bind(this)}/>
      </div>
    );
  };
}
