import React from "react";

import LikeStyle from "./Like.module.css";

export function Like(props) {
    return (
        <label className={`${props.className ?? ""} ${LikeStyle.label}`}>
            <input
                className={`${LikeStyle.input} visibility-hidden`}
                type="checkbox"
            />
            <span className={LikeStyle.like}> {props.status.count}</span>
        </label>
    );
}
