import { StandardProps } from "@/interfaces/components";
import classNames from "classnames";
import React, { FC } from "react";

import ErrorMessageStyle from "./ErrorMessage.module.css";

const ErrorMessage: FC<StandardProps> = ({ className, children }) => {
	return (
		<div className={classNames(ErrorMessageStyle.errorMessage, className)}>
			{children}
		</div>
	);
};

export { ErrorMessage };
