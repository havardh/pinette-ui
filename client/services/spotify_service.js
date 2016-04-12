import {request} from "./base_service";

export function on() {
  return request("/api/spotify/start");
}

export function status() {
  return request("/api/spotify/status");
}

export function off() {
  return request("/api/spotify/stop");
}
