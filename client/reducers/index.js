import { combineReducers } from "redux";

import podcast from "./podcast";
import sound from "./sound";
import turntable from "./turntable";

export default combineReducers({podcast, sound, turntable});
