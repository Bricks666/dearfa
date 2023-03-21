import { Typography, Button } from '@mui/material';
import cn from 'classnames';
import { useForm } from 'effector-forms';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { Contacts } from '@/shared/api';
import { useSubmit } from '@/shared/lib';
import { BasePopupProps, CommonProps } from '@/shared/types';
import { Checkbox, Field, MainPopup } from '@/shared/ui';
import { form, mutation, popup } from '../model';
import styles from './update-info.module.css';

export interface UpdateInfoProps extends CommonProps, BasePopupProps {}

export const UpdateInfo: React.FC<UpdateInfoProps> = React.memo(
	function UpdateInfoPopup(props) {
		const { className, isOpen, } = props;
		const isSubmitting = useUnit(mutation.$pending);
		const onClose = useUnit(popup.close);
		const { submit, fields, } = useForm(form);

		const {
			aboutMe,
			contacts,
			fullName,
			lookingForAJob,
			lookingForAJobDescription,
		} = fields;

		const onContactChange =
			(name: keyof Contacts) => (value: string | null) => {
				contacts.onChange({
					...contacts.value,
					[name]: value,
				});
			};

		const onSubmit = useSubmit(submit);

		return (
			<MainPopup
				className={className}
				isOpen={isOpen}
				onClose={onClose}
				title='Обновление данных профиля'>
				<form className={cn(styles.form, className)} onSubmit={onSubmit}>
					<Field
						value={fullName.value}
						onChange={fullName.onChange}
						onBlur={fullName.onBlur}
						helperText={fullName.errorText()}
						isValid={fullName.isValid}
						name={fullName.name}
						label='Полное имя'
					/>
					<Field
						value={aboutMe.value}
						onChange={aboutMe.onChange}
						onBlur={aboutMe.onBlur}
						helperText={aboutMe.errorText()}
						isValid={aboutMe.isValid}
						name={aboutMe.name}
						label='Обо мне'
					/>
					<Checkbox
						value={lookingForAJob.value}
						onChange={lookingForAJob.onChange}
						name={lookingForAJob.name}
						label='Ищу работу'
					/>
					<Field
						value={lookingForAJobDescription.value}
						onChange={lookingForAJobDescription.onChange}
						onBlur={lookingForAJobDescription.onBlur}
						helperText={lookingForAJobDescription.errorText()}
						isValid={lookingForAJobDescription.isValid}
						name={lookingForAJobDescription.name}
						label='Описание поиска'
						disabled={!lookingForAJob.value}
					/>
					<fieldset className={styles.fieldset}>
						<Typography className={styles.legend} component='legend'>
							Контакты
						</Typography>
						<Field
							value={contacts.value.github}
							onChange={onContactChange('github')}
							onBlur={contacts.onBlur}
							helperText={contacts.errorText()}
							isValid={contacts.isValid}
							name={contacts.name}
							label='GitHub'
						/>
						<Field
							value={contacts.value.facebook}
							onChange={onContactChange('facebook')}
							onBlur={contacts.onBlur}
							helperText={contacts.errorText()}
							isValid={contacts.isValid}
							name={contacts.name}
							label='Facebook'
						/>
						<Field
							value={contacts.value.twitter}
							onChange={onContactChange('twitter')}
							onBlur={contacts.onBlur}
							helperText={contacts.errorText()}
							isValid={contacts.isValid}
							name={contacts.name}
							label='Twitter'
						/>
						<Field
							value={contacts.value.youtube}
							onChange={onContactChange('youtube')}
							onBlur={contacts.onBlur}
							helperText={contacts.errorText()}
							isValid={contacts.isValid}
							name={contacts.name}
							label='YouTube'
						/>
						<Field
							value={contacts.value.vk}
							onChange={onContactChange('vk')}
							onBlur={contacts.onBlur}
							helperText={contacts.errorText()}
							isValid={contacts.isValid}
							name={contacts.name}
							label='VK'
						/>
						<Field
							value={contacts.value.mainLink}
							onChange={onContactChange('mainLink')}
							onBlur={contacts.onBlur}
							helperText={contacts.errorText()}
							isValid={contacts.isValid}
							name={contacts.name}
							label='Email'
						/>
						<Field
							value={contacts.value.website}
							onChange={onContactChange('website')}
							onBlur={contacts.onBlur}
							helperText={contacts.errorText()}
							isValid={contacts.isValid}
							name={contacts.name}
							label='WebSite'
						/>
						<Field
							value={contacts.value.instagram}
							onChange={onContactChange('instagram')}
							onBlur={contacts.onBlur}
							helperText={contacts.errorText()}
							isValid={contacts.isValid}
							name={contacts.name}
							label='Instagram'
						/>
					</fieldset>
					<Button
						className={styles.button}
						disabled={isSubmitting}
						type='submit'>
						Сохранить
					</Button>
				</form>
			</MainPopup>
		);
	}
);
