import * as SpotifyActions from '../actions/spotify_actions';

export default function turntable(state = {on: true}, {type}) {
  switch (type) {
    case SpotifyActions.ON:
      return {on: true};
    case SpotifyActions.OFF:
      return {on: false};
    default:
      return state;
  }
}
