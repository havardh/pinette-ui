import SoundService from '../services/sound_service';
import * as SoundActions from './sound_actions';

function setVolume(volume) {
  return {
    type: SoundActions.SOUND_ACTION_VOLUME,
    volume
  };
}

export default {

  call(action) {
    SoundService[action]().then(() => {});
  },

  setVolume(volume) {
    return dispatch => {
      SoundService.set(volume).then((volume) => {
        dispatch(setVolume(JSON.parse(volume)));
      });
    };
  },

  getVolume() {
    return dispatch => {
      SoundService.volume().then((volume) => {
        dispatch(setVolume(JSON.parse(volume)));
      });
    };
  },

};
