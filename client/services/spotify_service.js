import request from "./base_service";

export function on() {
  return request("/api/spotify/start");
}

export function ison() {
  return request("/api/spotify/ison");
}

export function off() {
  return request("/api/spotify/stop");
}
