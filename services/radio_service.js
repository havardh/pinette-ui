import request from "./base_service";

export default {

  p1() {
    return request('/api/radio/p1/start');
  },

  p2() {
    return request('/api/radio/p2/start');
  },

  p3() {
    return request('/api/radio/p3/start');
  },

  p13() {
    return request('/api/radio/p13/start');
  },

  off() {
    return request('/api/radio/stop');
  }
}
