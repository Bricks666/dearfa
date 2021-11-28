import classNames from "classnames";
import React from "react";
import { useLike } from "../../../../../Hooks";

import LikeStyle from "./Like.module.css";

export const Like = ({ className, postId, status }) => {
	const { toggleLike } = useLike(postId);
	return (
		<label className={classNames(LikeStyle.label, className)}>
			<input
				className={classNames(LikeStyle.input, "visibility-hidden")}
				type="checkbox"
				checked={status.isLiked}
				onChange={toggleLike}
			/>
			<span className={LikeStyle.like}>{status.count}</span>
		</label>
	);
};
