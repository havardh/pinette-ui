import request from "./base_service";

export default {

  ismute() {
    return request('/api/sound/ismute');
  },

  mute() {
    return request('/api/sound/mute');
  },

  unmute() {
    return request('/api/sound/unmute');
  },

  set(volume) {
    return request("/api/sound/set?value=" + volume);
  },

  volume() {
    return request('/api/sound/volume');
  },

  up() {
    return request('/api/sound/up');
  },

  down() {
    return request('/api/sound/down');
  }

}
