import { request } from './base_service';

export default {

  status() {
    return request('/api/turntable/status');
  },

  on() {
    return request('/api/turntable/start');
  },

  off() {
    return request('/api/turntable/stop');
  },
};
