import classNames from "classnames";
import React from "react";

import LoadingStyle from "./Loading.module.css";

export const Loading = ({ className }) => {
	return (
		<div className={classNames(LoadingStyle.wrapper, className)}>
			<div className={LoadingStyle.loading}></div>
		</div>
	);
};
