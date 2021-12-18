import React, { FC } from "react";
import classNames from "classnames";

import { Picture } from "../../../Shared";
import { IOnlyClassComponent, URLorNull } from "../../../../Types/Common";

import ChangeProfilePhotoStyle from "./ChangeProfilePhoto.module.css";

interface IChangePhotoComponent extends IOnlyClassComponent {
	newPhotoURL: URLorNull;
	photo: URLorNull;
}

export const ChangeProfilePhoto: FC<IChangePhotoComponent> = ({
	className,
	newPhotoURL,
	photo,
}) => {
	return (
		<object
			className={classNames(ChangeProfilePhotoStyle.object, className)}
			data={newPhotoURL ?? ""}
		>
			<Picture
				className={classNames(ChangeProfilePhotoStyle.photo, className)}
				oneXSrc={photo}
				alt=""
			/>
		</object>
	);
};
