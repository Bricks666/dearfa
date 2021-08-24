import React from "react";
import { Button } from "../Button/Button";

import MakeMessageStyle from "./MakeMessage.module.css";

function MakeMessage(props) {
    const publish = (evt) => {
        evt.preventDefault();

        props.callback(props.fieldName);
    };

    const printWord = (evt) => {
        evt.preventDefault();

        props.enterWords(evt.target.value, props.fieldName);
    };

    return (
        <form className={`${props.className} ${MakeMessageStyle.makeMessage}`}>
            <textarea
                className={MakeMessageStyle.newMessageText}
                placeholder={props.placeholder}
                value={props.stateFields.get(props.fieldName)?.value ?? ""}
                onChange={printWord}
                name="content"
            />
            <Button
                className={MakeMessageStyle.button}
                type="submit"
                onClick={publish}
            >
                {props.buttonMessage}
            </Button>
        </form>
    );
}

export { MakeMessage };
