import { request } from './base_service';

export default {
  ismute() {
    return request({ url: '/api/sound/ismute' });
  },

  mute() {
    return request({ url: '/api/sound/mute' });
  },

  unmute() {
    return request({ url: '/api/sound/unmute' });
  },

  set(volume) {
    return request({ url: `/api/sound/set?value=${volume}` });
  },

  volume() {
    return request({ url: '/api/sound/volume' });
  },

  up() {
    return request({ url: '/api/sound/up' });
  },

  down() {
    return request({ url: '/api/sound/down' });
  },
};
