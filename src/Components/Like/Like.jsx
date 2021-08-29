import React from "react";

import LikeStyle from "./Like.module.css";

export function Like(props) {
    const onChange = () => {
        props.toggle();
    };

    return (
        <label className={`${props.className ?? ""} ${LikeStyle.label}`}>
            <input
                className={`${LikeStyle.input} visibility-hidden`}
                type="checkbox"
                checked={props.status.isLiked}
                onChange={onChange}
            />
            <span className={LikeStyle.like}>{props.status.count}</span>
        </label>
    );
}
