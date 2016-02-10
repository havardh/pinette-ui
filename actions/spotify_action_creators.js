import * as SpotifyService from "../services/spotify_service";

export function on() {
  return SpotifyService.on().then(() => {
    return SpotifyService.ison();
  });
}

export function off() {
  return SpotifyService.off().then(() => {
    return SpotifyService.ison()
  });
}
