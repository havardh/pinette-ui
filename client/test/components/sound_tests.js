/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
import React from 'react';

import Sound from '../../src/components/sound';
import { StatusIndicator } from '../../src/components/status';
import * as SoundActionCreators from '../../src/actions/sound_action_creators';


describe('Sound', () => {
  let store;
  beforeEach(() => {
    store = {
      getState: () => ({}),
      dispatch: () => {},
      subscribe: () => {},
    };

    sinon.stub(store, 'getState').returns({ sound: { volume: 0 } });
  });

  it("should render title 'Sound'", () => {
    const component = TestUtils.renderIntoDocument(<Sound store={store} />);

    expect(component).to.have.xpath("//h2[contains(., 'Sound')]");
  });

  it('should render status indicator', () => {
    const component = TestUtils.renderIntoDocument(<Sound store={store} />);

    expect(component).to.have.component(StatusIndicator);
  });

  it('should trigger SoundActionCreators.up when up button is clicked', () => {
    sinon.stub(SoundActionCreators, 'up').returns(() => {});
    const component = TestUtils.render(<Sound store={store} />);

    TestUtils.click(component, "//button[@class='up']");

    expect(SoundActionCreators.up).to.have.been.called;
  });

  it('should trigger SoundActionCreators.down when down button is clicked', () => {
    sinon.stub(SoundActionCreators, 'down').returns(() => {});
    const component = TestUtils.render(<Sound store={store} />);

    TestUtils.click(component, { xpath: "//button[@class='down']" });

    expect(SoundActionCreators.down).to.have.been.called;
  });

  it("should trigger SoundActionCreators.call('unmute') when on button is clicked", () => {
    sinon.stub(SoundActionCreators, 'call').returns(() => {});
    const component = TestUtils.render(<Sound store={store} />);

    TestUtils.clickTagByClass(component, 'on');

    expect(SoundActionCreators.call).to.have.been.calledWith('unmute');
  });

  it("should trigger SoundActionCreators.call('mute') when off button is clicked", () => {
    sinon.stub(SoundActionCreators, 'call').returns(() => {});
    const component = TestUtils.render(<Sound store={store} />);

    TestUtils.clickTagByClass(component, 'off');

    expect(SoundActionCreators.call).to.have.been.calledWith('mute');
  });
});
