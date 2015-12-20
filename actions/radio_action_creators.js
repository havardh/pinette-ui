import RadioService from '../services/radio_service';

export default {

  call(action) {
    RadioService[action]().then(() => {});
  },

};
