import classNames from "classnames";
import React, { FC } from "react";
import { ILikeComponent } from "../../../Types/Components";

import LikeStyle from "./Like.module.css";

export const Like: FC<ILikeComponent> = ({
	className,
	status,
	likeHandler,
}) => {
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
