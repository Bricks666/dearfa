import React from "react";
import { Button } from "../Button/Button";
import { addMessageActionCreator } from "../../Redux/ActionCreators/addMessage";
import { FileUpload } from "../FileUpload/FileUpload";

import MakeMessageStyle from "./MakeMessage.module.css";
import { inputMessageActionCreator } from "../../Redux/ActionCreators/inputMessageActionCreator";

function MakeMessage(props) {
    const addMessage = (evt) => {
        evt.preventDefault();

        const action = addMessageActionCreator();
        props.dispatch(action);
    };

    const printWord = (evt) => {
        evt.preventDefault();

        const action = inputMessageActionCreator(evt.target.value);

        props.dispatch(action);
    };

    return (
        <form
            className={`${props.className} ${MakeMessageStyle.makeMessage}`}
            onSubmit={addMessage}
        >
            <textarea
                className={MakeMessageStyle.newMessageText}
                placeholder={props.placeholder}
                value={props.content?.text ?? ""}
                onChange={printWord}
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
