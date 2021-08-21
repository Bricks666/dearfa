import React from "react";
import { Button } from "../Button/Button";

import MakeMessageStyle from "./MakeMessage.module.css";

function MakeMessage(props) {
    return (
        <form
            className={`${props.className} ${MakeMessageStyle.makeMessage}`}
            onSubmit={(evt) => {
                evt.preventDefault();
            }}
        >
            <textarea
                className={MakeMessageStyle.newMessageText}
                placeholder={props.placeholder}
                name="content"
            ></textarea>
            <Button className={MakeMessageStyle.button} type="submit">
                {props.buttonMessage}
            </Button>
        </form>
    );
}

export { MakeMessage };
