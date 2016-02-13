import { combineReducers } from "redux";

import podcast from "./podcast";
import sound from "./sound";

export default combineReducers({
  podcast,
  sound
});
