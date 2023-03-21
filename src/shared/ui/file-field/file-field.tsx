import { Input, InputLabel } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { FieldProps } from '../field';

import styles from './file-field.module.css';

export interface FileFieldProps extends Omit<FieldProps, 'type' | 'value'> {}

export const FileField: React.FC<FileFieldProps> = (props) => {
	const { className, label, ...rest } = props;

	const id = React.useId();

	const onChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
		if (!rest.onChange) {
			return;
		}

		rest.onChange(evt.target.files);
	};

	return (
		<fieldset className={cn(styles.fileField, className)}>
			<InputLabel htmlFor={id}>{label}</InputLabel>
			<Input
				className='visibility-hidden'
				{...(rest as any)}
				onChange={onChange}
				id={id}
				type='file'
			/>
		</fieldset>
	);
};
