import React, { FC } from "react";
import classNames from "classnames";
import { StandardProps } from "@/interfaces/components";

import LoadingStyle from "./Loading.module.css";

export const Loading: FC<StandardProps> = ({ className }) => {
	return (
		<div className={classNames(LoadingStyle.wrapper, className)}>
			<div className={LoadingStyle.loading}></div>
		</div>
	);
};
