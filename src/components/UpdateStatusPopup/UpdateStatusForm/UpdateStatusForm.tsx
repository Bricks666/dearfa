import { joiResolver } from '@hookform/resolvers/joi';
import { Button, Stack } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { UpdateStatusParams } from '@/shared/api/profile';
import styles from './UpdateStatusForm.module.css';
import { validateScheme } from './validate';
import { updateStatusMutation } from '@/models/profile';
import { CommonProps } from '@/types';
import { Field } from '@/ui';

export interface UpdateStatusFormProps extends CommonProps {
	readonly defaultValues: UpdateStatusParams;
}

export const UpdateStatusForm: React.FC<UpdateStatusFormProps> = React.memo(
	function UpdateStatusForm(props) {
		const { className, defaultValues, } = props;
		const { control, handleSubmit, formState, } = useForm<UpdateStatusParams>({
			defaultValues,
			resolver: joiResolver(validateScheme),
		});
		const updateStatus = useUnit(updateStatusMutation.start);

		const { isDirty, isSubmitting, } = formState;
		const disabled = isSubmitting || !isDirty;

		return (
			<Stack
				className={cn(styles.form, className)}
				onSubmit={handleSubmit(updateStatus)}
				spacing={1}
				component='form'>
				<Field name='status' control={control} label='Статус' />
				<Button type='submit' disabled={disabled}>
					Сохранить
				</Button>
			</Stack>
		);
	}
);
