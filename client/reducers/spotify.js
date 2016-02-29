import {ON, OFF} from '../actions/spotify_actions';

export default function turntable(state = {on: true}, {type} = {}) {
  switch (type) {
    case ON:
      return {on: true};
    case OFF:
      return {on: false};
    default:
      return state;
  }
}
