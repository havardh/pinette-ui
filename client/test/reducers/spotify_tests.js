import {expect} from "chai";

import spotify from "../../reducers/spotify";
import {ON, OFF} from "../../actions/spotify_actions";

describe("spotify reducer", () => {

  it("should return '{on: true}' as defualt", () => {
    const defaultState = spotify();

    expect(defaultState).to.deep.equal({on: true});
  });

  it("should return '{on: true}' given ON", () => {
    const state = spotify({}, {type: ON});

    expect(state).to.deep.equal({on: true});
  });

  it("should return '{on: false}' given OFF", () => {
    const state = spotify({}, {type: OFF});

    expect(state).to.deep.equal({on: false});
  })

});
