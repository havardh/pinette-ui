import React from "react";
import ReactDOM from "react-dom";

import PodcastStore from "./stores/podcast_store";

PodcastStore.register();


import App from "./components/app.js";

ReactDOM.render(
  <App />,
  document.getElementById('app')
);