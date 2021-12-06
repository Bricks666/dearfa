import React, { FC } from "react";
import classNames from "classnames";

import LoadingStyle from "./Loading.module.css";

export interface ILoading {
	className?: string;
}

export const Loading: FC<ILoading> = ({ className }) => {
	return (
		<div className={classNames(LoadingStyle.wrapper, className)}>
			<div className={LoadingStyle.loading}></div>
		</div>
	);
};
