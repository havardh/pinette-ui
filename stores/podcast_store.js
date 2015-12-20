import BaseStore from "./base_store";
import {
  RECEIVED_FILES,
  PLAYING_FILE,
  RESUME,
  PAUSE,
  STOP
} from "../actions/podcast_actions";

export class PodcastStore extends BaseStore {

  constructor() {
    super();

    this.setState({nowPlaying: {}});
  }

  handleEvent(action) {
    switch (action.actionType) {
      case RECEIVED_FILES:
        this.setField("files", action.files);
        return true;

      case PLAYING_FILE:
        this.setField("status", "Playing");
        this.setField("nowPlaying", action.file);
        return true;

      case RESUME:
        this.setField("status", "Playing");
        return true;

      case PAUSE:
        this.setField("status", "Paused");
        return true;

      case STOP:
        this.setField("nowPlaying", {});
        this.setField("status", "Stopped");
        return true;

      default:
        return false;
    }
  }
}

export default new PodcastStore;
