import Dispatcher from "../dispatcher";

import PodcastService from "../services/podcast_service";
import {
  RECEIVED_FILES,
  PLAYING_FILE,
  RESUME,
  PAUSE,
  STOP
} from "./podcast_actions";

function receivePodcasts(files) {
  return {
    type: RECEIVED_FILES,
    files
  }
}

function playPodcast(file) {
  return {
    type: PLAYING_FILE,
    file
  };
}

function resumePodcast() {
  return {
    type: RESUME
  };
}

function pausePodcast() {
  return {
    type: PAUSE
  };
}

function stopPodcast() {
  return {
    type: STOP
  };
}

export default {

  fetchPodcasts() {
    return dispatch => {
      PodcastService.list().then(files => {
        dispatch(receivePodcasts(files));
      });
    };
  },

  start(file) {
    return dispatch => {
      PodcastService.start(file.fileName).then(response => {
        if (response.status) {
          dispatch(playPodcast(file));
        } else {
          console.log(response);
        }
      });
    };
  },

  resume() {
    return dispatch => {
      PodcastService.resume().then(response => {
        if (response.status) {
          dispatch(resumePodcast());
        } else {
          console.log(response);
        }
      });
    }
  },

  pause() {
    return dispatch => {
      PodcastService.pause().then(response => {
        if (response.status) {
          dispatch(pausePodcast());
        } else {
          console.log(response);
        }
      });
    };
  },

  stop() {
    return dispatch => {
      PodcastService.stop().then(response => {
        if (response.status) {
          dispatch(stopPodcast());
        } else {
          console.log(response);
        }
      });
    };
  }
};
