import {SOUND_ACTION_VOLUME} from "../actions/sound_actions";

export default function sound(state = {on: false, volume: 0}, {type, volume}) {

  switch (type) {
    case SOUND_ACTION_VOLUME:
      return {
        ...state,
        volume: volume.left
      };

    default:
      return state;
  }
}
