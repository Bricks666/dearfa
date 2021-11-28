import classNames from "classnames";
import React from "react";

import { Picture } from "../../../../Shared/";

import ChangeProfilePhotoStyle from "./ChangeProfilePhoto.module.css";

export const ChangeProfilePhoto = React.memo(
	({ className, newPhotoURL, photo }) => {
		return (
			<object
				className={classNames(ChangeProfilePhotoStyle.object, className)}
				data={newPhotoURL ?? ""}
			>
				<Picture
					className={classNames(ChangeProfilePhotoStyle.photo, className)}
					oneXSrc={photo}
				/>
			</object>
		);
	}
);
