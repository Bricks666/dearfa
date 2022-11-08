import * as React from 'react';
import {
	FieldValues,
	useController,
	UseControllerProps,
} from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';
import { CommonProps } from '@/types';

export interface FieldProps<F extends FieldValues>
	extends CommonProps,
		UseControllerProps<F>,
		Omit<TextFieldProps, keyof UseControllerProps> {}

export const Field = <F extends FieldValues>(props: FieldProps<F>) => {
	const { name, control, defaultValue, rules, shouldUnregister, ...rest } =
		props;
	const { field, fieldState } = useController({
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
	});
	const { ref, ...state } = field;
	const { error } = fieldState;
	return (
		<TextField
			{...rest}
			{...state}
			error={!!error}
			helperText={error?.message}
			inputRef={ref}
		/>
	);
};
