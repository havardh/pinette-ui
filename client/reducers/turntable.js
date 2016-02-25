import * as TurntableActions from '../actions/turntable_actions';

export default function turntable(state = {on: true}, {type}) {
  switch (type) {
    case TurntableActions.ON:
      return {on: true};
    case TurntableActions.OFF:
      return {on: false};
    default:
      console.log(state);
      return state;
  }
}
