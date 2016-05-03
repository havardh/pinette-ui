import * as TurntableActions from './turntable_actions';
import TurntableService from '../services/turntable_service';

function statusOn() {
  return { type: TurntableActions.ON };
}

function statusOff() {
  return { type: TurntableActions.OFF };
}

export default {

  status() {
    return dispatch => {
      TurntableService.status()
        .then(status => (status ?
          dispatch(statusOn()) :
          dispatch(statusOff())));
    };
  },

  on() {
    return dispatch => {
      TurntableService.on()
        .then(() => dispatch(statusOn()));
    };
  },

  off() {
    return dispatch => {
      TurntableService.off()
        .then(() => dispatch(statusOff()));
    };
  },

};
