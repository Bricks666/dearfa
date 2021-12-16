import React, { FC } from "react";
import classNames from "classnames";
import { IOnlyClassComponent } from "../../../Types/Common";

import LoadingStyle from "./Loading.module.css";

export const Loading: FC<IOnlyClassComponent> = ({ className }) => {
	return (
		<div className={classNames(LoadingStyle.wrapper, className)}>
			<div className={LoadingStyle.loading}></div>
		</div>
	);
};
