import React, { FC } from "react";
import classNames from "classnames";
import { Picture } from "@/components/Shared";
import { URL } from "@/interfaces/common";
import { StandardProps } from "@/interfaces/components";

import ChangedPhotoStyle from "./ChangedPhoto.module.css";

interface ChangePhoto {
	readonly photo: URL | null;
	readonly newPhotoURL: URL | null;
	readonly newPhoto: File | null;
}

export interface ChangePhotoProps
	extends StandardProps,
		Omit<ChangePhoto, "newPhoto"> {}

export const ChangedPhoto: FC<ChangePhotoProps> = ({
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
