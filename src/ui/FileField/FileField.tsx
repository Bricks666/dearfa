import * as React from 'react';
import cn from 'classnames';
import { Button, Input, InputLabel, InputProps } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './FileField.module.css';

export interface FileFieldProps
	extends UseFormRegisterReturn,
		Omit<InputProps, keyof UseFormRegisterReturn | 'type' | 'id'>,
		Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputProps> {
	readonly label: string;
}

export const FileField = React.forwardRef<HTMLInputElement, FileFieldProps>(
	(props, ref) => {
		const { className, label, ...rest } = props;

		const id = React.useId();

		return (
			<fieldset className={cn(styles.fileField, className)}>
				<InputLabel htmlFor={id}>
					<Button component='span'>{label}</Button>
				</InputLabel>
				<Input
					className='visibility-hidden'
					{...rest}
					id={id}
					type='file'
					inputRef={ref}
				/>
			</fieldset>
		);
	}
);
