import React from "react";

import ButtonStyle from "./Button.module.css";

function Button(props) {
    return (
        <button
            className={`${ButtonStyle.button} ${props.className ?? ""}`}
            type={props.type}
        >
            {props.children}
        </button>
    );
}

export { Button };
