import * as React from 'react';
import cn from 'classnames';
import { Field, Button } from '@/components/Shared';
import { ChangedPhoto } from './ChangedPhoto/ChangedPhoto';
import { FileInput } from '@/components/Shared/FileInput/FileInput';
import { useProfile } from '@/hooks';
/* import {
	ChangeProfileForm,
	ChangeProfileInitial,
	IChangeProfileComponent,
} from "../../../types/Components";
 */
import styles from './ChangeProfile.module.css';

const Form: FC = (/* {
	handleSubmit,
	initialValues,
	values,
	pristine,
	className,
} */) => {
	return null;
	/* 	<form
			onSubmit={handleSubmit}
			className={cn(styles.form, className)}
		>
			<legend className={styles.header}>Изменение профиля</legend>
			<ReactField
				name="photo"
				render={FileInput}
				className={styles.photoLabel}
				accept="image/*"
			>
				<ChangedPhoto
					className={styles.photo}
					photo={initialValues?.photo?.photo || null}
					newPhotoURL={values.photo.newPhotoURL}
				/>
			</ReactField>
			<ReactField
				className={styles.fullName}
				name="name"
				render={Field}
			>
				Имя
			</ReactField>
			<ReactField
				className={styles.aboutMe}
				name="aboutMe"
				render={Field}
			>
				Обо мне
			</ReactField>
			<fieldset className={styles.contacts}>
				<legend className={styles.subheader}>Контакты</legend>
				<ReactField name="facebook" render={Field}>
					Facebook
				</ReactField>
				<ReactField name="github" render={Field}>
					Github
				</ReactField>
				<ReactField name="instagram" render={Field}>
					Instagram
				</ReactField>
				<ReactField name="email" render={Field}>
					Email
				</ReactField>
				<ReactField name="twitter" render={Field}>
					Twitter
				</ReactField>
				<ReactField name="vk" render={Field}>
					Vk
				</ReactField>
				<ReactField name="website" render={Field}>
					Website
				</ReactField>
				<ReactField name="youtube" render={Field}>
					Youtube
				</ReactField>
			</fieldset>
			<Button className={styles.button} disabled={pristine}>
				Сохранить изменения
			</Button>
		</form> */
};

export const ChangeProfile: FC = (/* {
	className,
	onSubmit,
} */) => {
	/* 	const { user } = useProfile();
	const initialValues: ChangeProfileInitial = {
		userId: user.userId,
		photo: { newPhoto: null, newPhotoURL: null, photo: user.photos.large },
		name: user.fullName,
		aboutMe: user.aboutMe,
		github: user.contacts.github,
		facebook: user.contacts.facebook,
		instagram: user.contacts.instagram,
		mailLink: user.contacts.mailLink,
		twitter: user.contacts.twitter,
		vk: user.contacts.vk,
		website: user.contacts.website,
		youtube: user.contacts.youtube,
	}; */
	return null;
	/* 	<ReactForm
			className={className}
			initialValues={initialValues}
			onSubmit={onSubmit}
			render={Form}
		/> */
};
