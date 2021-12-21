import React, { FC } from "react";
import classNames from "classnames";
import { Picture } from "../../../Shared";
import { IChangedPhotoComponent } from "../../../../Types/Components";

import ChangedPhotoStyle from "./ChangedPhoto.module.css";

export const ChangedPhoto: FC<IChangedPhotoComponent> = ({
	className,
	newPhotoURL,
	photo,
}) => {
	return (
		<object
			className={classNames(ChangedPhotoStyle.object, className)}
			data={newPhotoURL ?? ""}
		>
			<Picture
				className={classNames(ChangedPhotoStyle.photo, className)}
				oneXSrc={photo}
				alt=""
			/>
		</object>
	);
};
