import style from "./scss/app.scss";
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";

import reducers from "./reducers";

const store = createStore(reducers);

import App from "./components/app.js";

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('app')
)
