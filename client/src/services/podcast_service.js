import { request } from './base_service';

export default {
  start(file) {
    return request(`/api/podcast/start?value=${file}`);
  },

  stop() {
    return request('/api/podcast/stop');
  },
};
