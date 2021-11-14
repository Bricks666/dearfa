import React, { memo } from "react";

import ErrorMessageStyle from "./ErrorMessage.module.css";

const ErrorMessage = memo(({ className, children }) => {
	return (
		<div className={`${ErrorMessageStyle.errorMessage} ${className ?? ""}`}>
			{children}
		</div>
	);
});

export { ErrorMessage };
