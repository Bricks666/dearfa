import React from "react";

import { ErrorMessage } from "../";

import TextareaStyle from "./Textarea.module.css";

export const Textarea = ({
	children,
	placeholder,
	input,
	meta: { error, touched },
}) => {
	const showError = error && touched;
	return (
		<label className={TextareaStyle.label}>
			{showError && <ErrorMessage>{error}</ErrorMessage>}
			{children}
			<textarea
				className={TextareaStyle.textarea}
				{...input}
				placeholder={placeholder}
			/>
		</label>
	);
};
