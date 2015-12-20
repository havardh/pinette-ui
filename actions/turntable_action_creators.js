import TurntableService from '../services/turntable_service';

export default {

  call(action) {
    TurntableService[action]().then(() => {});
  },

};
