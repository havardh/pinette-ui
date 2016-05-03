import { request } from './base_service';

export function on() {
  return request({ url: '/api/spotify/start' });
}

export function status() {
  return request({ url: '/api/spotify/status' });
}

export function off() {
  return request({ url: '/api/spotify/stop' });
}
