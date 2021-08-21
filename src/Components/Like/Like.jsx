import React from "react";

import LikeStyle from "./Like.module.css";

export function Like(props) {
    return (
        <label className={`${props.className ?? ""} ${LikeStyle.label}`}>
            <input
                className={`${LikeStyle.input} visibility-hidden`}
                type="checkbox"
                defaultChecked={props.status.isLiked}
                onClick={(evt) => {
                    const el = evt.target;
                    console.log(props.status.count + (el.checked ? 1 : -1));
                }}
            />
            <span className={LikeStyle.like}> {props.status.count}</span>
        </label>
    );
}
