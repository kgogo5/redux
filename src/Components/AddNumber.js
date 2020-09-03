import React, { Component } from "react";

class AddNumber extends Component {
  render() {
    return (
      <div>
        <h3>Add Number</h3>
        <input type="button" value="+" />
        <input type="text" value={this.props.number} />
      </div>
    );
  }
}

export default AddNumber;
