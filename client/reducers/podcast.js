import _ from "lodash";
import {START, STOP, SET_FILE} from "../actions/podcast_actions";

export default function podcast(state = {status: false, file: ""}, action = {}) {
  switch (action.type) {

    case STOP:
      return _.assign({}, state, {status: false});

    case START:
      return _.assign({}, state, {status: true});

    case SET_FILE:
      return _.assign({}, state, {file: action.file});

    default:
      return state;
  }
}
