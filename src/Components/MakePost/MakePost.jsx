import React from "react";
import { Button } from "../Button/Button";
import { addPostActionCreator } from "../../Redux/ActionCreators/addPost";
import { inputPostActionCreator } from "../../Redux/ActionCreators/inputPostActionCreator";

import MakePostStyle from "./MakePost.module.css";

function MakePost(props) {
    const addPost = (evt) => {
        evt.preventDefault();

        const action = addPostActionCreator();
        props.dispatch(action);
    };

    const printWord = (evt) => {
        evt.preventDefault();

        const action = inputPostActionCreator(evt.target.value);
        props.dispatch(action);
    };

    return (
        <form className={`${props.className} ${MakePostStyle.form}`}>
            <textarea
                className={MakePostStyle.textarea}
                placeholder={props.placeholder}
                value={props.content?.text ?? ""}
                onChange={printWord}
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
