import SoundService from '../services/sound_service';
import * as SoundActions from './sound_actions';

function setVolume(volume) {
  return {
    type: SoundActions.SOUND_ACTION_VOLUME,
    volume
  };
}

function setMute() {
  return {
    type: SoundActions.SOUND_ACTION_MUTE
  };
}

function setNotMute() {
  return {
    type: SoundActions.SOUND_ACTION_UNMUTE
  };
}

export default {

  call(action) {
    return dispatch => {
      return SoundService[action]().then(() => {
        if (action === "mute" || action === "unmute") {
          return this.ismute()(dispatch);
        }
      });
    }
  },

  up () {
    return dispatch => {
      return SoundService.up().then((volume) => {
        dispatch(setVolume(volume));
      });
    };
  },

  down () {
    return dispatch => {
      return SoundService.down().then((volume) => {
        dispatch(setVolume(volume));
      });
    }
  },

  ismute() {
    return dispatch => {
      return SoundService.ismute().then(ismute => {
        if (ismute) {
          dispatch(setMute());
        } else {
          dispatch(setNotMute());
        }
      })
    }
  },

  setVolume(volume) {
    return dispatch => {
      return SoundService.set(volume).then((volume) => {
        dispatch(setVolume(volume));
      });
    };
  },

  getVolume() {
    return dispatch => {
      return SoundService.volume().then((volume) => {
        dispatch(setVolume(volume));
      });
    };
  },

};
