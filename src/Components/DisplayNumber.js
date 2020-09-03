import React, { Component } from "react";

class DisplayNumber extends Component {
  render() {
    return (
      <>
        <div>
          <h2>Root Number</h2>
          <input type="text" value={this.props.number} />
        </div>
      </>
    );
  }
}

export default DisplayNumber;
