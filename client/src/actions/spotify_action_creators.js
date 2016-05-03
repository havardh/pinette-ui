import * as SpotifyActions from './spotify_actions';
import * as SpotifyService from '../services/spotify_service';

function statusOn() {
  return { type: SpotifyActions.ON };
}

function statusOff() {
  return { type: SpotifyActions.OFF };
}

function createAction(isOn) {
  return isOn ? statusOn() : statusOff();
}

export function status() {
  return dispatch => {
    SpotifyService.status()
      .then(res => dispatch(createAction(res)));
  };
}

export function on() {
  return dispatch => {
    return SpotifyService.on()
      .then(res => dispatch(createAction(res)));
  };
}

export function off() {
  return dispatch => {
    return SpotifyService.off()
      .then(res => dispatch(createAction(res)));
  };
}
