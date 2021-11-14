import React, { memo } from "react";

import CheckboxStyle from "./Checkbox.module.css";

export const Checkbox = memo(({ className, input, children }) => {
	return (
		<div className={`${className ?? ""}`}>
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
});
