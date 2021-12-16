import classNames from "classnames";
import React, { FC } from "react";
import { useLike } from "../../../../../Hooks";
import { IOnlyClassComponent } from "../../../../../Types/Common";
import { ILike } from "../../../../../Types/Redux";

import LikeStyle from "./Like.module.css";

interface ILikeComponent extends IOnlyClassComponent {
	postId: number;
	status: ILike;
}

export const Like: FC<ILikeComponent> = ({ className, postId, status }) => {
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
