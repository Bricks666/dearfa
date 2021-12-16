import classNames from "classnames";
import React, { FC } from "react";
import { FieldRenderProps } from "react-final-form";
import { IOnlyClassComponent } from "../../../Types/Common";

import CheckboxStyle from "./Checkbox.module.css";

interface ICheckbox
	extends IOnlyClassComponent,
		FieldRenderProps<undefined, HTMLInputElement> {}

export const Checkbox: FC<ICheckbox> = ({ className, input, children }) => {
	return (
		<div className={classNames(className)}>
			<input
				className={CheckboxStyle.input}
				type="checkbox"
				id="checkbox"
				{...input}
			/>
			<label className={CheckboxStyle.label} htmlFor="checkbox">
				{children}
			</label>
		</div>
	);
};
