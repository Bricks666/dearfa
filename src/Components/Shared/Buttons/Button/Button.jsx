import React from "react";

import ButtonStyle from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={`${ButtonStyle.button} ${props.className ?? ""} `}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export { Button };
