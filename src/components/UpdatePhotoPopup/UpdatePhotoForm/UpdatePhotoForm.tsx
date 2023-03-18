import { Avatar, Button } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { UpdatePhotoParams } from '@/shared/api/profile';
import styles from './UpdatePhotoForm.module.css';
import { useURL } from '@/hooks';
import { updatePhotoMutation } from '@/models/profile';
import { CommonProps } from '@/types';
import { FileField } from '@/ui';


export interface UpdatePhotoFormProps extends CommonProps {
	readonly defaultValues: { photo: string | null };
}

export const UpdatePhotoForm: React.FC<UpdatePhotoFormProps> = React.memo(
	function UpdatePhotoForm(props) {
		const { className, defaultValues, } = props;
		const { handleSubmit, watch, formState, register, } =
			useForm<UpdatePhotoParams>();
		const updatePhoto = useUnit(updatePhotoMutation.start);

		const photo = watch('photo');
		const { isDirty, isSubmitting, } = formState;
		const disabled = isSubmitting || !isDirty;
		const data = useURL((photo && photo[0]) || defaultValues.photo);
		return (
			<form
				className={cn(styles.form, className)}
				onSubmit={handleSubmit(updatePhoto)}>
				<Avatar
					className={styles.photo}
					data={data}
					width={25}
					height={25}
					aria-label='Аватарка'
					variant='rounded'
					component='object'
				/>
				<FileField
					label='Выбрать фото'
					inputProps={{ accept: '.jpg, .jpeg', }}
					{...register('photo')}
				/>
				<Button type='submit' disabled={disabled}>
					Сохранить
				</Button>
			</form>
		);
	}
);
