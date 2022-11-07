import * as React from 'react';

export const FileInput: FC = () => {
	/* const onChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
		evt.preventDefault();
		evt.stopPropagation();
		if (evt.target.files !== null) {
			const file = evt.target.files[0];
			const url = URL.createObjectURL(file);
			input.onChange({ ...input.value, newFile: file, newFileURL: url });
		}
	};
	return (
		<Field
			input={{ ...input, type: "file", value: undefined, onChange }}
			meta={{ error: meta.error, touched: meta.touched }}
			fieldClass="visibility-hidden"
			{...props}
		/>
	); */
	return null;
};
