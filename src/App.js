import React, { Component } from "react";
import AddNumber from "./Components/AddNumber";
import DisplayNumber from "./Components/DisplayNumber";
import MyEditor from "./Components/Editor";

class App extends Component {
  state = { number: 0 };
  render() {
    return (
      <>
        <h1>Root</h1>
        <AddNumber number={this.state.number} />
        <DisplayNumber number={this.state.number} />
        <br />
        <MyEditor />
      </>
    );
  }
}

export default App;
