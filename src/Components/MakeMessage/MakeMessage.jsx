import React from "react";
import { Button } from "../Button/Button";

import MakeMessageStyle from "./MakeMessage.module.css";

function MakeMessage(props) {
    const publish = (evt) => {
        evt.preventDefault();

        const action = {
            type: props.dispatchType,
            fieldName: props.fieldName,
        };
        props.dispatch(action);
    };

    const printWord = (evt) => {
        evt.preventDefault();

        const action = {
            type: "PRINT-WORD",
            value: evt.target.value,
            fieldName: props.fieldName,
        };
        props.dispatch(action);
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
