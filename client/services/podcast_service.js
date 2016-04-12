import {request} from "./base_service";

export default {
  list() {
    return request("/api/pod/list");
  },

  start(file) {
    return request("/api/pod/start/" + file);
  },

  resume() {
    return request("/api/pod/resume");
  },

  stop() {
    return request("/api/pod/stop");
  },

  pause() {
    return request("/api/pod/pause");
  }
};
