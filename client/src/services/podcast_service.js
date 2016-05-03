import { request } from './base_service';

export default {
  start(file) {
    return request({ url: `/api/podcast/start?value=${file}` });
  },

  stop() {
    return request({ url: '/api/podcast/stop' });
  },
};
