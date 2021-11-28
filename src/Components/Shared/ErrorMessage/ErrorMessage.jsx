import classNames from "classnames";
import React, { memo } from "react";

import ErrorMessageStyle from "./ErrorMessage.module.css";

const ErrorMessage = memo(({ className, children }) => {
	return (
		<div className={classNames(ErrorMessageStyle.errorMessage, className)}>
			{children}
		</div>
	);
});

export { ErrorMessage };
