import * as SpotifyActions from './spotify_actions';
import * as SpotifyService from "../services/spotify_service";

function statusOn() {
  return { type: SpotifyActions.ON };
}

function statusOff() {
  return { type: SpotifyActions.OFF };
}

function createAction(status) {
  return status ? statusOn() : statusOff();
}

export function status(dispatch) {
  return dispatch => {
    SpotifyService.status()
      .then(status => dispatch(createAction(status)));
  };
}

export function on() {
  return dispatch => {
    return SpotifyService.on()
      .then(status => dispatch(createAction(status)));
  };
}

export function off() {
  return dispatch => {
    return SpotifyService.off()
      .then(status => dispatch(createAction(status)));
  };
}
