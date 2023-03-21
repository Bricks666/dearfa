import { Avatar, Button, CircularProgress } from '@mui/material';
import { useForm } from 'effector-forms';
import { useStoreMap, useUnit } from 'effector-react';
import * as React from 'react';
import { profileInfoModel } from '@/entities/profile';
import { useSubmit, useURL } from '@/shared/lib';
import { BasePopupProps, CommonProps } from '@/shared/types';
import { FileField, MainPopup } from '@/shared/ui';
import { form, mutation, popup } from '../model';
import styles from './update-photo.module.css';

export interface UpdatePhotoProps extends CommonProps, BasePopupProps {}

export const UpdatePhoto: React.FC<UpdatePhotoProps> = React.memo(
	function UpdatePhotoPopup(props) {
		const { className, isOpen, } = props;

		const defaultPhoto = useStoreMap({
			store: profileInfoModel.query.$data,
			fn: (info) => info.photos.large,
			defaultValue: '',
			keys: [],
		});
		const onClose = useUnit(popup.close);
		const isLoading = useUnit(profileInfoModel.query.$pending);
		const isSubmitting = useUnit(mutation.$pending);
		const { fields, submit, } = useForm(form);
		const { photo, } = fields;
		const data = useURL((photo.value && photo.value[0]) || defaultPhoto) ?? '';

		const onSubmit = useSubmit(submit);

		return (
			<MainPopup
				className={className}
				isOpen={isOpen}
				onClose={onClose}
				title='Обновление фотографии'>
				{isLoading ? (
					<CircularProgress className={styles.loading} />
				) : (
					<form className={styles.form} onSubmit={onSubmit}>
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
							label={<Button component='span'>Выбрать фото</Button>}
							inputProps={{
								accept: '.jpg, .jpeg',
								className: 'visibility-hidden',
							}}
							onChange={photo.onChange}
							onBlur={photo.onBlur}
							helperText={photo.errorText()}
							isValid={photo.isValid}
							name={photo.name}
						/>
						<Button type='submit' disabled={isSubmitting} variant='contained'>
							Сохранить
						</Button>
					</form>
				)}
			</MainPopup>
		);
	}
);
