import { combineReducers } from "redux";

import podcast from "./podcast";
import sound from "./sound";
import spotify from "./spotify";
import turntable from "./turntable";

export default combineReducers({
  podcast,
  sound,
  spotify,
  turntable
});
