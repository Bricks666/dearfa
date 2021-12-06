import classNames from "classnames";
import React, {  } from "react";

import ErrorMessageStyle from "./ErrorMessage.module.css";

const ErrorMessage = (({ className, children }) => {
	return (
		<div className={classNames(ErrorMessageStyle.errorMessage, className)}>
			{children}
		</div>
	);
});

export { ErrorMessage };
