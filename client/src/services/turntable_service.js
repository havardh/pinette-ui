import { request } from './base_service';

export default {

  status() {
    return request({ url: '/api/turntable/status' });
  },

  on() {
    return request({ url: '/api/turntable/start' });
  },

  off() {
    return request({ url: '/api/turntable/stop' });
  }
};
