import {
  RECEIVED_FILES,
  PLAYING_FILE,
  RESUME,
  PAUSE,
  STOP
} from "../actions/podcast_actions";

export default function podcast(state = {status: "Off"}, action) {
  switch (action.type) {
    case RECEIVED_FILES:
      return {
        ...state,
        files: files(state.files, action)
      };

    case STOP:
    case PLAYING_FILE:
      return {
        ...state,
        status: status(state.status, action),
        nowPlaying: playing(state.nowPlaying, action)
      };

    case RESUME:
    case PAUSE:
      return {
        ...state,
        status: status(state.status, action)
      };

    default:
      return state;
  }
}

console.log(podcast);

function playing(state = {}, {type, file}) {
  switch (type) {
    case PLAYING_FILE:
      return file;
    case STOP:
      return {};
    default:
      return state;
  }

}

function status(state = "Off", {type}) {
  switch (type) {
    case PLAYING_FILE:
      return "Playing";

    case RESUME:
      return "Playing";
      return true;

    case PAUSE:
      return "Paused";

    case STOP:
      return "Stopped";

    default:
      return state;
  }
}

function files(state = [], {type, files}) {

  switch (type) {
    case RECEIVED_FILES:
      return files;
    default:
      return state;
  }
}
