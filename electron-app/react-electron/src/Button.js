import React from "react";

function Button() {
  const { ipcRenderer } = window.require("electron");
  const { 
    SEND_CLOSE, SEND_MAX, SEND_MIN 
  } = require('./constants'); 
  //   const sendMail = () => {
  //     ipcRenderer.send(SEND_MAIN_PING, "send");
  //   };

  const onMinBtn = () => {
    ipcRenderer.send(SEND_MIN, "send");
  };
  const onMaxBtn = () => {
    ipcRenderer.send(SEND_MAX, "send");
  };
  const onCloseBtn = () => {
    ipcRenderer.send(SEND_CLOSE, "send");
  };

  return (
    <div className="container">
      <div className="title-bar">
        <div className="title prevent-select draggable">Custom Title Bar</div>
        <div className="control prevent-select">
          <button onClick={onMinBtn}>
            <i className="fa fa-window-minimize"></i>
          </button>
          <button onClick={onMaxBtn}>
            <i className="fa fa-window-maximize"></i>
          </button>
          <button onClick={onCloseBtn}>
            <i className="fa fa-window-close"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Button;
