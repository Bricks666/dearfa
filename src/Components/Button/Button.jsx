import React from "react";

import ButtonStyle from "./Button.module.css";

function Button(props) {
    let onClick = () => {};
    if (props.callback !== undefined) {
        onClick = () => {
            props.callback();
        };
    }
    return (
        <button
            className={`${ButtonStyle.button} ${props.className ?? ""}`}
            type={props.type}
            onClick={onClick}
        >
            {props.children}
        </button>
    );
}

export { Button };
