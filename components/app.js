import React from "react";

import Sound from "./sound";
import Turntable from "./turntable";
import Radio from "./radio";

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Sound />
        <Turntable />
        <Radio />
      </div>
    );
  }

}
