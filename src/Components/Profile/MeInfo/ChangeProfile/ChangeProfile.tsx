import React, { FC } from "react";
import classNames from "classnames";
import { Form as ReactForm, Field as ReactField } from "react-final-form";

import { Field, Button } from "../../../Shared";
import { ChangeProfilePhoto } from "./Photo/ChangeProfilePhoto";
import { FileInput } from "./FileInput/FileInput";

import ChangeProfileStyle from "./ChangeProfile.module.css";
import {
	FormSubmitHandler,
	ID,
	IFormInner,
	IOnlyClassComponent,
	URLorNull,
} from "../../../../Types/Common";
import { IContacts } from "../../../../Types/Redux";
import { useUserProfile } from "../../../../Hooks";

interface IChangePhoto {
	photo: URLorNull;
	newPhotoURL: URLorNull;
	newPhoto: File | null;
}

type FormValues = {
	userId: ID;
	name: string;
	aboutMe: string;
	photo: IChangePhoto;
} & IContacts;

interface IChangeProfileForm extends IOnlyClassComponent {
	onSubmit: FormSubmitHandler<FormValues>;
}

const Form: FC<IFormInner<FormValues>> = ({
	handleSubmit,
	initialValues,
	values,
	pristine,
	className,
}) => {
	return (
		<form
			onSubmit={handleSubmit}
			className={classNames(ChangeProfileStyle.form, className)}
		>
			<legend className={ChangeProfileStyle.header}>Изменение профиля</legend>
			<ReactField
				name="photo"
				render={FileInput}
				className={ChangeProfileStyle.photoLabel}
				accept="image/*"
			>
				<ChangeProfilePhoto
					className={ChangeProfileStyle.photo}
					photo={initialValues?.photo?.photo || null}
					newPhotoURL={values.photo.newPhotoURL}
				/>
			</ReactField>
			<ReactField
				className={ChangeProfileStyle.fullName}
				name="name"
				render={Field}
			>
				Имя
			</ReactField>
			<ReactField
				className={ChangeProfileStyle.aboutMe}
				name="aboutMe"
				render={Field}
			>
				Обо мне
			</ReactField>
			<fieldset className={ChangeProfileStyle.contacts}>
				<legend className={ChangeProfileStyle.subheader}>Контакты</legend>
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
			<Button className={ChangeProfileStyle.button} disabled={pristine}>
				Сохранить изменения
			</Button>
		</form>
	);
};

export const ChangeProfileForm: FC<IChangeProfileForm> = ({
	className,
	onSubmit,
}) => {
	const { user } = useUserProfile();
	const initialValues: Partial<FormValues> = {
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
	};
	return (
		<ReactForm
			className={className}
			initialValues={initialValues}
			onSubmit={onSubmit}
			render={Form}
		/>
	);
};
