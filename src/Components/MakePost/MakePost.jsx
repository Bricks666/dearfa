import React from "react";
import { Button } from "../Buttons/Button";

import MakePostStyle from "./MakePost.module.css";

function MakePost(props) {
    const addPost = (evt) => {
        evt.preventDefault();

        props.addPost();
    };

    const inputPost = (evt) => {
        evt.preventDefault();

        props.inputPost(evt.target.value);
    };

    return (
        <form className={`${props.className ?? ""} ${MakePostStyle.form}`}>
            <textarea
                className={MakePostStyle.textarea}
                placeholder={props.placeholder ?? ""}
                value={props.content?.text ?? ""}
                onChange={inputPost}
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
