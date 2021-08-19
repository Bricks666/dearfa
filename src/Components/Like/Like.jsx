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
                    const element = evt.target;
                    props.status.count += element.checked ? 1 : -1;
                }}
            />
            <span className={LikeStyle.like}> {props.status.count}</span>
        </label>
    );
}
