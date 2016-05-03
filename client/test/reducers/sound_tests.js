/* eslint-env mocha */
import { expect } from 'chai';

import sound from '../../src/reducers/sound';
import {
  SOUND_ACTION_VOLUME,
  SOUND_ACTION_MUTE,
  SOUND_ACTION_UNMUTE,
} from '../../src/actions/sound_actions';

describe('sound reducer', () => {
  it('should return off and zero volume as defualt', () => {
    const defaultState = sound();

    expect(defaultState).to.deep.equal({
      on: false,
      volume: 0,
    });
  });

  it('should set volume given VOLUME', () => {
    const state = sound({}, {
      type: SOUND_ACTION_VOLUME,
      volume: { left: 100, right: 100 },
    });

    expect(state.volume).to.equal(100);
  });

  it("should set '{on: false}' given MUTE'", () => {
    const state = sound({}, { type: SOUND_ACTION_MUTE });

    expect(state.on).to.equal(false);
  });

  it("should set '{on: true}' given UNMUTE", () => {
    const state = sound({}, { type: SOUND_ACTION_UNMUTE });

    expect(state.on).to.equal(true);
  });
});
