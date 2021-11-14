import React from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

import FieldStyle from "./Field.module.css";

const Field = React.memo(
	({
		input,
		meta: { error, touched },
		className,
		children,
		fieldClass,
		accept,
	}) => {
		const showError = touched && error;
		return (
			<label className={`${FieldStyle.label} ${className ?? ""}`}>
				{showError && <ErrorMessage>{error}</ErrorMessage>}
				{children}
				<input
					className={`${FieldStyle.field} ${fieldClass ?? ""}`}
					{...input}
					accept={accept}
				/>
			</label>
		);
	}
);

export { Field };
