import React from "react";

import PodcastActionCreator from "../actions/podcast_action_creator";
import PodcastList from "./podcast_list";
import PodcastStore from "../stores/podcast_store";

function getStoreState() {
  return PodcastStore.getState();
}

export default class Podcast extends React.Component {

  constructor(props) {
    super(props);
    this.state = getStoreState();
  }

  componentDidMount() {
    PodcastActionCreator.enterPodcast();

    PodcastStore.addChangeListener(this.onStoreChanged.bind(this));
  }

  componentWillUnmount() {
    PodcastStore.removeListener(this.onStoreChanged.bind(this));
  }

  onStoreChanged() {
    this.setState(getStoreState(), () => {
      console.log(this.state);
    });
  }

  play() {
    PodcastActionCreator.resume();
  }

  pause() {
    PodcastActionCreator.pause();
  }

  stop() {
    PodcastActionCreator.stop();
  }

  onFileClicked(file) {
    PodcastActionCreator.start(file);
  }

  render() {
    return (
      <div>
        <h2>Podcast</h2>
        <div>
          {this.state.nowPlaying.fileName}
          <span> ({this.state.nowPlaying.duration})</span>
          <span> {this.state.status}</span>
        </div>
        <button onClick={this.play.bind(this)}>Play</button>
        <button onClick={this.pause}>Pause</button>
        <button onClick={this.stop}>Stop</button>

        <PodcastList files={this.state.files} onFileClicked={this.onFileClicked}/>
      </div>
    );
  };
}
