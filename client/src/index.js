import React from "react";
import ReactDOM from "react-dom";

import ListQueues from "./components/ListQueues";

const App = () => {
  return (
    <div>
      <ListQueues />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
