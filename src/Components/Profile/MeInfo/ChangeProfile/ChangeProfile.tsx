import React from "react";
import classNames from "classnames";
import { Form, Field as ReactField } from "react-final-form";

import { Field, Button } from "../../../Shared";
import { ChangeProfilePhoto } from "./Photo/ChangeProfilePhoto";
import { FileInput } from "./FileInput/FileInput";

import ChangeProfileStyle from "./ChangeProfile.module.css";

const ChangeProfileForm = ({
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
				component={FileInput}
				className={ChangeProfileStyle.photoLabel}
				accept="image/*"
			>
				<ChangeProfilePhoto
					className={ChangeProfileStyle.photo}
					photo={initialValues.photo.photo}
					newPhotoURL={values.photo.newPhotoURL}
				/>
			</ReactField>
			<ReactField
				className={ChangeProfileStyle.fullName}
				name="name"
				component={Field}
			>
				Имя
			</ReactField>
			<ReactField
				className={ChangeProfileStyle.aboutMe}
				name="aboutMe"
				component={Field}
			>
				Обо мне
			</ReactField>
			<fieldset className={ChangeProfileStyle.contacts}>
				<legend className={ChangeProfileStyle.subheader}>Контакты</legend>
				<ReactField name="facebook" component={Field}>
					Facebook
				</ReactField>
				<ReactField name="github" component={Field}>
					Github
				</ReactField>
				<ReactField name="instagram" component={Field}>
					Instagram
				</ReactField>
				<ReactField name="email" component={Field}>
					Email
				</ReactField>
				<ReactField name="twitter" component={Field}>
					Twitter
				</ReactField>
				<ReactField name="vk" component={Field}>
					Vk
				</ReactField>
				<ReactField name="website" component={Field}>
					Website
				</ReactField>
				<ReactField name="youtube" component={Field}>
					Youtube
				</ReactField>
			</fieldset>
			<Button className={ChangeProfileStyle.button} disabled={pristine}>
				Сохранить изменения
			</Button>
		</form>
	);
};

export const ChangeProfile = ({
	userId,
	contacts,
	fullName,
	aboutMe,
	photos: { large: photo },
	onSubmit,
}) => {
	return (
		<Form
			initialValues={{
				userId,
				...contacts,
				photo: { newPhoto: null, newPhotoURL: null, photo },
				name: fullName,
				aboutMe,
			}}
			onSubmit={onSubmit}
			render={ChangeProfileForm}
		/>
	);
};
