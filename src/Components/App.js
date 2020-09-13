import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MyEditor from "./Editor";
import Number from "./Number";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";

export default function App() {
  const [state, setState] = useState({ number: 0 });

  const onClick = (e) => {
    setState({
      number: e.target.value === "+" ? state.number + 1 : state.number - 1,
    });
  };

  return (
    <>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/:id" component={Detail}></Route>
      </Router>
      <form>
        <Number state={state} Click={onClick} />
      </form>
      <MyEditor />
    </>
  );
}
