import React from "react";
import { Button } from "../Button/Button";
import { addPostActionCreator } from "../../Redux/ActionCreators/addPost";
import { printWordActionCreator } from "../../Redux/ActionCreators/printWord";

import MakePostStyle from "./MakePost.module.css";

function MakePost(props) {
    const addPost = (evt) => {
        evt.preventDefault();

        const action = addPostActionCreator(props.fieldName);
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
        <form className={`${props.className} ${MakePostStyle.makeMessage}`}>
            <textarea
                className={MakePostStyle.newMessageText}
                placeholder={props.placeholder}
                value={props.stateFields.get(props.fieldName)?.value ?? ""}
                onChange={printWord}
                name="content"
            />
            <Button
                className={MakePostStyle.button}
                type="submit"
                onClick={addPost}
            >
                {props.buttonMessage}
            </Button>
        </form>
    );
}

export { MakePost };
