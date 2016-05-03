import React from 'react';

import TurntableActionCreators from '../actions/turntable_action_creators';
import { StatusIndicator } from './status';

export default class Turntable extends React.Component {

  constructor(props) {
    super(props);

    const { store } = props;
    this.state = store.getState().turntable;

    this.dispatch = store.dispatch.bind(store);
  }

  componentDidMount() {
    const { store } = this.props;

    TurntableActionCreators.status()(this.dispatch);

    this.unsubscribe = store.subscribe(() => this.onStoreChanged());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStoreChanged() {
    const { store } = this.props;
    this.setState(store.getState().turntable);
  }

  on() { TurntableActionCreators.on()(this.dispatch); }
  off() { TurntableActionCreators.off()(this.dispatch); }

  render() {
    const { on } = this.state;

    return (
      <div className="tile black">
        <h2>Platespiller</h2>

        <StatusIndicator on={on} />

        <div className="button-row">
          <button onClick={this.on.bind(this)}>På</button>
          <button onClick={this.off.bind(this)}>Av</button>
        </div>
      </div>
    );
  }
}

Turntable.propTypes = {
  store: React.PropTypes.object,
};
