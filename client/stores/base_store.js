import _ from "lodash";

import Dispatcher from "../dispatcher";
import EventEmitter from "wolfy87-eventemitter";

export default class BaseStore extends EventEmitter {

  register() {
    this.id = Dispatcher.register(this.onDispatcherEvent.bind(this));
  }

  unregister() {
    Dispatcher.unregister(this.id);
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }

  setField(field, value) {
    _.set(this.state, field, value);
  }

  onDispatcherEvent(action) {
    if (this.handleEvent(action)) {

      this.emit("change");
    }
  }

  addChangeListener(callback) {
    this.on("change", callback);
  }

  removeChangeListener(callback) {
    this.removeListener("change", callback);
  }

  handleEvent() {
    return false;
  }
}
