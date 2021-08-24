import React from "react";

import LikeStyle from "./Like.module.css";

export function Like(props) {
    const onClick = (evt) => {
        props.toggleLike(evt.target.checked);
    };

    return (
        <label className={`${props.className ?? ""} ${LikeStyle.label}`}>
            <input
                className={`${LikeStyle.input} visibility-hidden`}
                type="checkbox"
                checked={props.status.isLiked}
                onChange={onClick}
            />
            <span className={LikeStyle.like}>{props.status.count}</span>
        </label>
    );
}
