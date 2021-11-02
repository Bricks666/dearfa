import React from "react";

import FieldStyle from "./Field.module.css";

export const Field = React.memo((props) => {
	return (
		<label className={`${props.className ?? ""} ${FieldStyle.label}`}>
			{props.children}
			<input
				className={`${FieldStyle.field} ${props.fieldClass ?? ""}`}
				type={props.type}
				required={props.required}
				value={props.value ?? ""}
				onChange={props.input}
				autoComplete={props.autocomplete?.toString()}
				accept={props.accept}
			/>
		</label>
	);
});
