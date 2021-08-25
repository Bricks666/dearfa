import React from "react";
import { toggleLikeActionCreator } from "../../Redux/ActionCreators/toggleLike";

import LikeStyle from "./Like.module.css";

export function Like(props) {
    const onChange = () => {
        const action = toggleLikeActionCreator(props.postId);
        props.dispatch(action);
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
