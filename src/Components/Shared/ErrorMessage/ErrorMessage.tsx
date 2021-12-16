import classNames from "classnames";
import React, { FC } from "react";
import { IOnlyClassComponent } from "../../../Types/Common";

import ErrorMessageStyle from "./ErrorMessage.module.css";

const ErrorMessage: FC<IOnlyClassComponent> = ({ className, children }) => {
	return (
		<div className={classNames(ErrorMessageStyle.errorMessage, className)}>
			{children}
		</div>
	);
};

export { ErrorMessage };
