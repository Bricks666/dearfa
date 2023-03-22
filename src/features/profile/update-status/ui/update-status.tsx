import { Stack, Button, CircularProgress } from '@mui/material';
import cn from 'classnames';
import { useForm } from 'effector-forms';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { profileStatusModel } from '@/entities/profile';
import { useSubmit } from '@/shared/lib';
import { BasePopupProps, CommonProps } from '@/shared/types';
import { Field, MainPopup } from '@/shared/ui';
import { form, mutation, popup } from '../model';
import styles from './update-status.module.css';

export interface UpdateStatusProps extends CommonProps, BasePopupProps {}

export const UpdateStatus: React.FC<UpdateStatusProps> = React.memo(
	function UpdateStatusPopup(props) {
		const { className, isOpen, } = props;

		const isLoading = useUnit(profileStatusModel.query.$pending);
		const onClose = useUnit(popup.close);
		const { fields, submit, } = useForm(form);
		const isSubmitting = useUnit(mutation.$pending);
		const { status, } = fields;

		const onSubmit = useSubmit(submit);

		return (
			<MainPopup
				className={className}
				isOpen={isOpen}
				onClose={onClose}
				title='Обновление статуса'>
				{isLoading ? (
					<CircularProgress className={styles.loading} />
				) : (
					<Stack
						className={cn(styles.form, className)}
						onSubmit={onSubmit}
						spacing={1}
						component='form'>
						<Field
							value={status.value}
							onChange={status.onChange}
							onBlur={status.onBlur}
							helperText={status.errorText()}
							isValid={status.isValid}
							name={status.name}
							label='Статус'
						/>
						<Button type='submit' disabled={isSubmitting}>
							Сохранить
						</Button>
					</Stack>
				)}
			</MainPopup>
		);
	}
);
