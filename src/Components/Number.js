import React from "react";

const Number = (props) => {
  return (
    <>
      <span>{props.state.number}</span>
      <input type="button" value="+" onClick={props.Click} />
      <input type="button" value="-" onClick={props.Click} />
    </>
  );
};

export default Number;
