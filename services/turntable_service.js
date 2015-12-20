import request from "./base_service";

export default {

  on() {
    return request('/api/turntable/start');
  },

  off() {
    return request('/api/turntable/stop');
  }
}
