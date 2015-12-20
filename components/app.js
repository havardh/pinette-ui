import React from "react";

import Sound from "./sound";
import Turntable from "./turntable";
import Radio from "./radio";
import Podcast from "./podcast";

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Sound />
        <Turntable />
        <Radio />
        <Podcast />
      </div>
    );
  }

}
