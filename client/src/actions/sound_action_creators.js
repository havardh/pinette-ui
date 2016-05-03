import SoundService from '../services/sound_service';
import * as SoundActions from './sound_actions';

function setVolumeAction(volume) {
  return {
    type: SoundActions.SOUND_ACTION_VOLUME,
    volume,
  };
}

function setMute() {
  return {
    type: SoundActions.SOUND_ACTION_MUTE,
  };
}

function setNotMute() {
  return {
    type: SoundActions.SOUND_ACTION_UNMUTE,
  };
}

export function call(action) {
  return dispatch => {
    return SoundService[action]().then(() => {
      return this.ismute()(dispatch);
    });
  };
}

export function up() {
  return dispatch => {
    return SoundService.up().then((volume) => {
      dispatch(setVolume(volume));
    });
  };
}

export function down() {
  return dispatch => {
    return SoundService.down().then((volume) => {
      dispatch(setVolume(volume));
    });
  };
}

export function ismute() {
  return dispatch => {
    return SoundService.ismute().then(mute => {
      if (mute) {
        dispatch(setMute());
      } else {
        dispatch(setNotMute());
      }
    });
  };
}

export function setVolume(volume) {
  return dispatch => {
    return SoundService.set(volume).then((response) => {
      dispatch(setVolumeAction(response));
    });
  };
}

export function getVolume() {
  return dispatch => {
    return SoundService.volume().then((volume) => {
      dispatch(setVolumeAction(volume));
    });
  };
}
