import React from "react";
import ReactDOM from "react-dom";

import ListQueues from "./components/ListQueues";
import AddQueue from "./components/AddQueue";

const App = () => {
  return (
    <div>
      <AddQueue />
      <ListQueues />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
