/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
import React from 'react';

import Sound from '../../src/components/sound';
import { StatusIndicator } from '../../src/components/status';

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
});
