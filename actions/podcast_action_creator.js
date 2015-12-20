import Dispatcher from "../dispatcher";

import PodcastService from "../services/podcast_service";
import {
  RECEIVED_FILES,
  PLAYING_FILE,
  RESUME,
  PAUSE,
  STOP
} from "./podcast_actions";

export default {
  enterPodcast() {
    PodcastService.list().then(files => {
      Dispatcher.dispatch({
        actionType: RECEIVED_FILES,
        files
      });
    });
  },

  start(file) {
    PodcastService.start(file.fileName).then(response => {
      if (response.status) {
        Dispatcher.dispatch({
          actionType: PLAYING_FILE,
          file
        });
      } else {
        console.log(response);
      }
    });
  },

  resume() {
    PodcastService.resume().then(response => {
      if (response.status) {
        Dispatcher.dispatch({
          actionType: RESUME
        });
      } else {
        console.log(response);
      }
    });
  },

  pause() {
    PodcastService.pause().then(response => {
      if (response.status) {
        Dispatcher.dispatch({
          actionType: PAUSE
        });
      } else {
        console.log(response);
      }
    });
  },

  stop() {
    PodcastService.stop().then(response => {
      if (response.status) {
        Dispatcher.dispatch({
          actionType: STOP
        });
      } else {
        console.log(response);
      }
    });
  }
};
