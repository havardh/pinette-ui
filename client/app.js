import style from "./scss/app.scss";
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";

import {podcast} from "./stores/podcast_store";

const store = createStore(podcast);

import App from "./components/app.js";

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('app')
)
