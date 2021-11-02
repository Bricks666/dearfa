import React, { useCallback, useReducer } from "react";
import { toValidNewProfileData } from "../../../../Services/toValidNewProfileData";
import { Button } from "../../../Shared/Buttons/Button/Button";

import { Field } from "../../../Shared/Field/Field";
import { ChangeProfilePhoto } from "./Photo/ChangeProfilePhoto";

import ChangeProfileStyle from "./ChangeProfile.module.css";

const reducer = (state, action) => {
	switch (action.type) {
		case "INPUT_FULLNAME": {
			return {
				...state,
				fullName: action.fullName,
			};
		}
		case "INPUT_STATUS": {
			return {
				...state,
				status: action.status,
			};
		}
		case "LOAD_PHOTO": {
			return {
				...state,
				newPhoto: action.photo,
				newPhotoURL: action.photoURL,
			};
		}
		case "INPUT_FACEBOOK": {
			return {
				...state,
				contacts: {
					...state.contacts,
					facebook: action.facebook,
				},
			};
		}
		case "INPUT_GITHUB": {
			return {
				...state,
				contacts: {
					...state.contacts,
					github: action.github,
				},
			};
		}
		case "INPUT_INSTAGRAM": {
			return {
				...state,
				contacts: {
					...state.contacts,
					instagram: action.instagram,
				},
			};
		}
		case "INPUT_EMAIL": {
			return {
				...state,
				contacts: {
					...state.contacts,
					mailLink: action.email,
				},
			};
		}
		case "INPUT_TWITTER": {
			return {
				...state,
				contacts: {
					...state.contacts,
					twitter: action.twitter,
				},
			};
		}
		case "INPUT_VK": {
			return {
				...state,
				contacts: {
					...state.contacts,
					vk: action.vk,
				},
			};
		}
		case "INPUT_WEBSITE": {
			return {
				...state,
				contacts: {
					...state.contacts,
					website: action.website,
				},
			};
		}
		case "INPUT_YOUTUBE": {
			return {
				...state,
				contacts: {
					...state.contacts,
					youtube: action.youtube,
				},
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
const inputFacebook = (facebook) => {
	return {
		type: "INPUT_FACEBOOK",
		facebook,
	};
};
const inputGithub = (github) => {
	return {
		type: "INPUT_GITHUB",
		github,
	};
};
const inputInstagram = (instagram) => {
	return {
		type: "INPUT_INSTAGRAM",
		instagram,
	};
};
const inputEmail = (email) => {
	return {
		type: "INPUT_EMAIL",
		email,
	};
};
const inputTwitter = (twitter) => {
	return {
		type: "INPUT_TWITTER",
		twitter,
	};
};
const inputVk = (vk) => {
	return {
		type: "INPUT_VK",
		vk,
	};
};
const inputWebsite = (website) => {
	return {
		type: "INPUT_WEBSITE",
		website,
	};
};
const inputYoutube = (youtube) => {
	return {
		type: "INPUT_YOUTUBE",
		youtube,
	};
};
const inputFullName = (fullName) => {
	return {
		type: "INPUT_FULLNAME",
		fullName,
	};
};
const inputStatus = (status) => {
	return {
		type: "INPUT_STATUS",
		status,
	};
};

export const ChangeProfile = (props) => {
	const [state, dispatch] = useReducer(reducer, {
		userId: props.userId,
		contacts: props.contacts,
		fullName: props.fullName,
		photo: props.photo,
		status: props.status,
		newPhoto: null,
		newPhotoURL: "",
	});

	const changePhoto = useCallback((evt) => {
		const photo = evt.target.files[0];
		dispatch(loadNewPhoto(URL.createObjectURL(photo), photo));
	}, []);
	const facebook = useCallback((evt) => {
		dispatch(inputFacebook(evt.target.value));
	}, []);
	const github = useCallback((evt) => {
		dispatch(inputGithub(evt.target.value));
	}, []);
	const instagram = useCallback((evt) => {
		dispatch(inputInstagram(evt.target.value));
	}, []);
	const mailLink = useCallback((evt) => {
		dispatch(inputEmail(evt.target.value));
	}, []);
	const twitter = useCallback((evt) => {
		dispatch(inputTwitter(evt.target.value));
	}, []);
	const vk = useCallback((evt) => {
		dispatch(inputVk(evt.target.value));
	}, []);
	const website = useCallback((evt) => {
		dispatch(inputWebsite(evt.target.value));
	}, []);
	const youtube = useCallback((evt) => {
		dispatch(inputYoutube(evt.target.value));
	}, []);
	const fullName = useCallback((evt) => {
		dispatch(inputFullName(evt.target.value));
	}, []);
	const status = useCallback((evt) => {
		dispatch(inputStatus(evt.target.value));
	}, []);

	const onSubmit = useCallback(
		(evt) => {
			evt.preventDefault();

			const newProfileData = toValidNewProfileData(state);
			props.onSubmit(newProfileData);
		},
		[props, state]
	);

	return (
		<form
			className={`${ChangeProfileStyle.form} ${props.className ?? ""}`}
			onSubmit={onSubmit}
		>
			<legend className={ChangeProfileStyle.header}>Изменение профиля</legend>
			<Field
				className={ChangeProfileStyle.fullName}
				value={state.fullName}
				input={fullName}
			>
				Имя
			</Field>
			<Field
				className={ChangeProfileStyle.status}
				value={state.status}
				input={status}
			>
				Статус
			</Field>
			<Field
				className={ChangeProfileStyle.photoLabel}
				fieldClass="visibility-hidden"
				type="file"
				input={changePhoto}
				accept="image/*"
			>
				<ChangeProfilePhoto
					className={ChangeProfileStyle.photo}
					photo={state.photo}
					newPhotoURL={state.newPhotoURL}
				/>
			</Field>
			<fieldset className={ChangeProfileStyle.contacts}>
				<legend className={ChangeProfileStyle.subheader}>Контакты</legend>
				<Field value={state.contacts.facebook} input={facebook}>
					Facebook
				</Field>
				<Field value={state.contacts.github} input={github}>
					Github
				</Field>
				<Field value={state.contacts.instagram} input={instagram}>
					Instagram
				</Field>
				<Field value={state.contacts.mailLink} input={mailLink}>
					Email
				</Field>
				<Field value={state.contacts.twitter} input={twitter}>
					Twitter
				</Field>
				<Field value={state.contacts.vk} input={vk}>
					Vk
				</Field>
				<Field value={state.contacts.website} input={website}>
					Website
				</Field>
				<Field value={state.contacts.youtube} input={youtube}>
					Youtube
				</Field>
			</fieldset>
			<Button className={ChangeProfileStyle.button}>Сохранить изменения</Button>
		</form>
	);
};
