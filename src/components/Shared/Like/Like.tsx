import { StandardProps } from "@/interfaces/components";
import { Like as LikeModel } from "@/models/posts";
import classNames from "classnames";
import React, { ChangeEventHandler, FC } from "react";

import LikeStyle from "./Like.module.css";

interface LikeProps extends StandardProps {
	readonly status: LikeModel;
	readonly likeHandler: ChangeEventHandler<HTMLInputElement>;
}

export const Like: FC<LikeProps> = ({ className, status, likeHandler }) => {
	return (
		<label className={classNames(LikeStyle.label, className)}>
			<input
				className={classNames(LikeStyle.input, "visibility-hidden")}
				type="checkbox"
				checked={status.liked}
				onChange={likeHandler}
			/>
			<span className={LikeStyle.like}>{status.count}</span>
		</label>
	);
};
