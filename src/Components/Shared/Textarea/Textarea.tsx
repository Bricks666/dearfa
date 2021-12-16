import React, { FC } from "react";
import { FieldRenderProps } from "react-final-form";

import { ErrorMessage } from "../";
import { IOnlyClassComponent } from "../../../Types/Common";

import TextareaStyle from "./Textarea.module.css";

interface ITextarea
	extends IOnlyClassComponent,
		FieldRenderProps<string, HTMLTextAreaElement> {
	placeholder?: string;
}

export const Textarea: FC<ITextarea> = ({
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
