import React from "react";
import { Field } from "../../../../Shared";

export const FileInput = ({ input, ...props }) => {
	const onChange = (evt) => {
		evt.preventDefault();
		evt.stopPropagation();
		const file = evt.target.files[0];
		const url = URL.createObjectURL(file);
		input.onChange({ ...input.value, newPhoto: file, newPhotoURL: url });
	};

	return (
		<Field
			input={{ ...input, type: "file", value: undefined, onChange }}
			fieldClass="visibility-hidden"
			{...props}
		/>
	);
};
