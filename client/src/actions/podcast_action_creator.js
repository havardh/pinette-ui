import PodcastService from '../services/podcast_service';
import { START, STOP, SET_FILE } from './podcast_actions';

function startPodcast() {
  return { type: START };
}

function stopPodcast() {
  return { type: STOP };
}

export default {

  start(file) {
    return dispatch => {
      PodcastService.start(file).then(response => {
        if (response) {
          dispatch(startPodcast());
        }
      });
    };
  },

  stop() {
    return dispatch => {
      PodcastService.stop().then(response => {
        if (response === false) {
          dispatch(stopPodcast());
        }
      });
    };
  },

  setFile(file) {
    return dispatch => {
      dispatch({ type: SET_FILE, file });
    };
  },
};
