import React, { ChangeEventHandler, FC, ReactElement } from "react";
import { FieldRenderProps } from "react-final-form";
import { EmptyObject, IOnlyClassComponent } from "../../../../../Types/Common";
import { Field } from "../../../../Shared";

interface IFileInputComponent<T>
	extends IOnlyClassComponent,
		FieldRenderProps<T, HTMLInputElement> {}

type PhotoUploadComponent = <T>(props: IFileInputComponent<T>) => ReactElement;

export const FileInput: PhotoUploadComponent = ({ input, ...props }) => {
	const onChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
		evt.preventDefault();
		evt.stopPropagation();
		if (evt.target.files !== null) {
			const file = evt.target.files[0];
			const url = URL.createObjectURL(file);
			input.onChange({ ...input.value, newPhoto: file, newPhotoURL: url });
		}
	};

	return (
		<Field
			input={{ ...input, type: "file", value: undefined, onChange }}
			fieldClass="visibility-hidden"
			{...props}
		/>
	);
};
