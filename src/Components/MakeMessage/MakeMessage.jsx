import React from "react";
import { Button } from "../Buttons/Button";
import { FileUpload } from "../FileUpload/FileUpload";

import MakeMessageStyle from "./MakeMessage.module.css";

function MakeMessage(props) {
    const addMessage = (evt) => {
        evt.preventDefault();

        props.addMessage();
    };

    const inputMessage = (evt) => {
        evt.preventDefault();

        props.inputMessage(evt.target.value);
    };

    return (
        <form
            className={`${props.className} ${MakeMessageStyle.makeMessage}`}
            onSubmit={addMessage}
        >
            <textarea
                className={MakeMessageStyle.newMessageText}
                placeholder={props.placeholder ?? ""}
                value={props.content?.text ?? ""}
                onChange={inputMessage}
                name="content"
            ></textarea>
            {/* Сделать рабочую загрузку каких-либо файлов на сервер */}
            <FileUpload className={MakeMessageStyle.upload} />
            <Button className={MakeMessageStyle.button} type="submit">
                {props.buttonMessage}
            </Button>
        </form>
    );
}

export { MakeMessage };
