import React from "react";

import ButtonStyle from "./Button.module.css";

function Button(props) {
    let onClick = (evt) => {};
    if (props.onClick !== undefined) {
        onClick = (evt) => {
            props.onClick(evt);
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
