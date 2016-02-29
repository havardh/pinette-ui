import {expect} from "chai";

import turntable from "../../reducers/turntable";
import {ON, OFF} from "../../actions/turntable_actions";

describe("turntable reducer", () => {

  it("should return '{on: true}' as defualt", () => {
    const defaultState = turntable();

    expect(defaultState).to.deep.equal({on: true});
  });

  it("should return '{on: true}' given ON", () => {
    const state = turntable({}, {type: ON});

    expect(state).to.deep.equal({on: true});
  });

  it("should return '{on: false}' given OFF", () => {
    const state = turntable({}, {type: OFF});

    expect(state).to.deep.equal({on: false});
  })

});
