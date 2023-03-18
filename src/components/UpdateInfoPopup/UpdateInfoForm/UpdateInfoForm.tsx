import { joiResolver } from '@hookform/resolvers/joi';
import { Button, Typography } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { UpdateInfoParams } from '@/shared/api/profile';
import styles from './UpdateInfoForm.module.css';
import { validateScheme } from './validate';
import { updateInfoMutation } from '@/models/profile';
import { CommonProps } from '@/types';
import { Checkbox, Field } from '@/ui';

export interface UpdateInfoFormProps extends CommonProps {
	readonly defaultValues: UpdateInfoParams;
}

export const UpdateInfoForm: React.FC<UpdateInfoFormProps> = React.memo(
	function UpdateInfoForm(props) {
		const { className, defaultValues, } = props;
		const updateInfo = useUnit(updateInfoMutation.start);
		const { control, handleSubmit, watch, formState, } =
			useForm<UpdateInfoParams>({
				defaultValues,
				resolver: joiResolver(validateScheme),
			});

		const lookingForAJob = watch('lookingForAJob');
		const { isSubmitting, isDirty, } = formState;
		const disabled = isSubmitting || !isDirty;

		return (
			<form
				className={cn(styles.form, className)}
				onSubmit={handleSubmit(updateInfo)}>
				<Field name='fullName' control={control} label='Полное имя' />
				<Field name='aboutMe' control={control} label='Обо мне' />
				<Checkbox name='lookingForAJob' control={control} label='Ищу работу' />
				<Field
					name='lookingForAJobDescription'
					control={control}
					label='Описание поиска'
					disabled={!lookingForAJob}
				/>
				<fieldset className={styles.fieldset}>
					<Typography className={styles.legend} component='legend'>
						Контакты
					</Typography>
					<Field name='contacts.github' control={control} label='GitHub' />
					<Field name='contacts.facebook' control={control} label='Facebook' />
					<Field name='contacts.twitter' control={control} label='Twitter' />
					<Field name='contacts.youtube' control={control} label='YouTube' />
					<Field name='contacts.vk' control={control} label='VK' />
					<Field name='contacts.mainLink' control={control} label='Main' />
					<Field name='contacts.website' control={control} label='WebSite' />
					<Field
						name='contacts.instagram'
						control={control}
						label='Instagram'
					/>
				</fieldset>
				<Button className={styles.button} disabled={disabled} type='submit'>
					Сохранить
				</Button>
			</form>
		);
	}
);
