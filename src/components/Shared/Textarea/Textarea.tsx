import { StandardProps } from "@/interfaces/components";
import React, { FC } from "react";
import { ErrorMessage } from "..";

import TextareaStyle from "./Textarea.module.css";

interface TextareaProps extends StandardProps {
	readonly input: object;
	readonly meta: any;
	readonly placeholder?: string;
}

export const Textarea: FC<TextareaProps> = ({
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
				placeholder={placeholder}
				{...input}
			/>
		</label>
	);
};
