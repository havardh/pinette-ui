import SoundService from '../services/sound_service';

export default {

  call(action) {
    SoundService[action]().then(() => {});
  },

};
