import React, { useReducer } from "react";
import { Button } from "../../../Shared/Buttons/Button/Button";

import { Field } from "../../../Shared/Field/Field";

import ChangeProfileStyle from "./ChangeProfile.module.css";

const reducer = (state, action) => {
	switch (action.type) {
	case "LOAD_PHOTO": {
		return {
			...state,
			newPhoto: action.photo,
			newPhotoURL: action.photoURL,
		};
	}
	default: {
		return state;
	}
	}
};

const loadNewPhoto = (photoURL, photo) => {
	return {
		type: "LOAD_PHOTO",
		photoURL,
		photo,
	};
};

export const ChangeProfile = (props) => {
	const [state, dispatch] = useReducer(reducer, {
		contacts: props.contacts,
		fullName: props.fullName,
		photo: props.photo,
		status: props.status,
		newPhoto: null,
		newPhotoURL: "",
	});

	const changePhoto = (evt) => {
		const photo = evt.target.files[0];
		console.log(photo);
		dispatch(loadNewPhoto(URL.createObjectURL(photo), photo));
	};

	console.log(props);
	console.log(state, dispatch);
	return (
		<form className={`${ChangeProfileStyle.form} ${props.className ?? ""}`}>
			<Field type="file" input={changePhoto} accept="image/*">
				Выбор фотографии
			</Field>
			<object
				className={ChangeProfileStyle.photo}
				data={state.newPhotoURL || state.photo}
			></object>
			<fieldset>
				<legend>Контакты</legend>
				<Field value={state.contacts.facebook}>Facebook</Field>
				<Field value={state.contacts.github}>Github</Field>
				<Field value={state.contacts.instagram}>Instagram</Field>
				<Field value={state.contacts.mailLink}>Email</Field>
				<Field value={state.contacts.twitter}>Twitter</Field>
				<Field value={state.contacts.vk}>Vk</Field>
				<Field value={state.contacts.website}>Website</Field>
				<Field value={state.contacts.youtube}>Youtube</Field>
			</fieldset>
			<Button>Сохранить изменения</Button>
		</form>
	);
};
