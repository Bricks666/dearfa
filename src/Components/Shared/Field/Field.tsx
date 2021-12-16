import classNames from "classnames";
import React, { FC } from "react";
import { FieldRenderProps } from "react-final-form";
import { IOnlyClassComponent } from "../../../Types/Common";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

import FieldStyle from "./Field.module.css";

interface IFieldComponent
	extends IOnlyClassComponent,
		FieldRenderProps<string | number | undefined, HTMLInputElement> {
	fieldClass?: string;
	accept?: string;
}

const Field: FC<IFieldComponent> = ({
	input,
	meta: { error, touched },
	className,
	children,
	fieldClass,
	accept,
}) => {
	const showError = touched && error;
	return (
		<label className={classNames(FieldStyle.label, className)}>
			{showError && <ErrorMessage>{error}</ErrorMessage>}
			{children}
			<input
				className={classNames(FieldStyle.field, fieldClass)}
				{...input}
				accept={accept}
			/>
		</label>
	);
};

export { Field };
