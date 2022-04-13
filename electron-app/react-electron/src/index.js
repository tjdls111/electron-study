import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./Game";
import Button from "./Button";

ReactDOM.render(
  <React.StrictMode>
    <Game />
    <Button />
  </React.StrictMode>,
  document.getElementById("root")
);
