import React, { Component } from "react";
import AddNumber from "./Components/AddNumber";
import DisplayNumber from "./Components/DisplayNumber";

class App extends Component {
  state = { number: 0 };
  render() {
    return (
      <>
        <h1>Root</h1>
        <AddNumber number={this.state.number} />
        <DisplayNumber number={this.state.number} />
      </>
    );
  }
}

export default App;
