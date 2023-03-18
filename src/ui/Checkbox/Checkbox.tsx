import * as React from 'react';
import {
	FormControlLabel,
	Checkbox as MUICheckbox,
	CheckboxProps as MUICheckboxProps,
} from '@mui/material';
import {
	FieldValues,
	useController,
	UseControllerProps,
} from 'react-hook-form';
import { CommonProps } from '@/types';

export interface CheckboxProps<F extends FieldValues>
	extends CommonProps,
		UseControllerProps<F>,
		Omit<MUICheckboxProps, keyof UseControllerProps> {
	readonly label: string;
}

export const Checkbox = <F extends FieldValues>(props: CheckboxProps<F>) => {
	const {
		label,
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
		...rest
	} = props;
	const { field } = useController({
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
	});
	const { ref, value, ...state } = field;
	return (
		<FormControlLabel
			control={
				<MUICheckbox {...rest} {...state} checked={value} inputRef={ref} />
			}
			label={label}
		/>
	);
};