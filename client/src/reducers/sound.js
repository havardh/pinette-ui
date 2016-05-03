import {
  SOUND_ACTION_VOLUME,
  SOUND_ACTION_MUTE,
  SOUND_ACTION_UNMUTE,
} from '../actions/sound_actions';

export default function sound(state = { on: false, volume: 0 }, { type, volume } = {}) {
  switch (type) {
    case SOUND_ACTION_VOLUME:
      return {
        ...state,
        volume: volume.left,
      };

    case SOUND_ACTION_MUTE:
      return {
        ...state,
        on: false,
      };

    case SOUND_ACTION_UNMUTE:
      return {
        ...state,
        on: true,
      };

    default:
      return state;
  }
}
