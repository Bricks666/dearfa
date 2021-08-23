import React from "react";
import { Button } from "../Button/Button";

import MakeMessageStyle from "./MakeMessage.module.css";

function MakeMessage(props) {
    const textareaRef = React.createRef();

    const publish = (evt) => {
        evt.preventDefault();

        const content = textareaRef.current.value;

        if (content !== "") {
            props.callback(props.fieldName);
        }
    };

    const printWord = (evt) => {
        evt.preventDefault();

        props.enterWords(evt.target.value, props.fieldName);
    };

    return (
        <form className={`${props.className} ${MakeMessageStyle.makeMessage}`}>
            <textarea
                className={MakeMessageStyle.newMessageText}
                ref={textareaRef}
                placeholder={props.placeholder}
                value={props.valueFields.get(props.fieldName)?.value ?? ""}
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
