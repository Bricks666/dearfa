import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../Button/Button";

import MakeMessageStyle from "./MakeMessage.module.css";

function MakeMessage(props) {
    const textareaRef = React.createRef();

    const clickOnButton = (evt) => {
        evt.preventDefault();
        const content = textareaRef.current.value;
        const authorId = props.id;
        props.callback({ authorId, content });
        textareaRef.current.value = "";
    };

    return (
        <form className={`${props.className} ${MakeMessageStyle.makeMessage}`}>
            <textarea
                className={MakeMessageStyle.newMessageText}
                ref={textareaRef}
                placeholder={props.placeholder}
                name="content"
            ></textarea>
            <Button
                className={MakeMessageStyle.button}
                type="submit"
                onClick={clickOnButton}
            >
                {props.buttonMessage}
            </Button>
        </form>
    );
}

export { MakeMessage };
