import React from "react";
import { Button } from "../Button/Button";
import { addMessageActionCreator } from "../../Redux/ActionCreators/addMessage";
import { printWordActionCreator } from "../../Redux/ActionCreators/printWord";
import { FileUpload } from "../FileUpload/FileUpload";

import MakeMessageStyle from "./MakeMessage.module.css";

function MakeMessage(props) {
    const addMessage = (evt) => {
        evt.preventDefault();

        const action = addMessageActionCreator(props.fieldName);
        props.dispatch(action);
    };

    const printWord = (evt) => {
        evt.preventDefault();

        const action = printWordActionCreator(
            evt.target.value,
            props.fieldName
        );
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
                value={props.stateFields.get(props.fieldName)?.value ?? ""}
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
