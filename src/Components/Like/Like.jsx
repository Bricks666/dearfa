import React from "react";

import LikeStyle from "./Like.module.css";

export function Like(props) {
    const countRef = React.createRef();

    const addLike = (evt) => {
        const el = evt.target;
        let count = Number(countRef.current.textContent);
        count += (el.checked ? 1 : -1);
        countRef.current.textContent = count;
    };

    return (
        <label className={`${props.className ?? ""} ${LikeStyle.label}`}>
            <input
                className={`${LikeStyle.input} visibility-hidden`}
                type="checkbox"
                defaultChecked={props.status.isLiked}
                onClick={addLike}
            />
            <span className={LikeStyle.like} ref={countRef}>
                {props.status.count}
            </span>
        </label>
    );
}
