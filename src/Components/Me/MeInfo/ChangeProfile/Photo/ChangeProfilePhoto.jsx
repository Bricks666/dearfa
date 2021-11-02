import React from "react";

import { Picture } from "../../../../Shared/Picture/Picture";

import ChangeProfilePhotoStyle from "./ChangeProfilePhoto.module.css";

export const ChangeProfilePhoto = React.memo((props) => {
	return (
		<object
			className={`${ChangeProfilePhotoStyle.object} ${props.className ?? ""}`}
			data={props.newPhotoURL ?? ""}
		>
			<Picture
				className={`${ChangeProfilePhotoStyle.photo} ${props.className ?? ""}`}
				oneXSrc={props.photo}
			/>
		</object>
	);
});
