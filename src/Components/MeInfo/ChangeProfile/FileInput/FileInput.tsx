import React, { ChangeEventHandler, ReactElement } from "react";
import { FieldRenderProps } from "react-final-form";
import { IOnlyClassComponent } from "../../../../Types/Common";
import { Field } from "../../../Shared";

interface IFileInputComponent<T>
	extends IOnlyClassComponent,
		FieldRenderProps<T, HTMLInputElement> {}

type PhotoUploadComponent = <T>(props: IFileInputComponent<T>) => ReactElement;

export const FileInput: PhotoUploadComponent = ({ input, meta, ...props }) => {
	const onChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
		evt.preventDefault();
		evt.stopPropagation();
		if (evt.target.files !== null) {
			const file = evt.target.files[0];
			const url = URL.createObjectURL(file);
			input.onChange({ ...input.value, newPhoto: file, newPhotoURL: url });
		}
	};
	/* TODO: Сделать нормальную типизацию */
	/* Переделать передачу пропсов для загрузки файла */
	return (
		<Field
			input={{ ...input, type: "file", value: undefined, onChange }}
			meta={{ error: meta.error, touched: meta.touched }}
			fieldClass="visibility-hidden"
			{...props}
		/>
	);
};
