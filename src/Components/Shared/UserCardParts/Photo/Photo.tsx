import classNames from "classnames";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ID, IOnlyClassComponent, URLorNull } from "../../../../Types/Common";
import { Picture } from "../../Picture/Picture";

import PhotoStyle from "./Photo.module.css";

interface IPhoto extends IOnlyClassComponent {
	id: ID;
	photo: URLorNull;
	fullName: string;
}

export const Photo: FC<IPhoto> = ({ className, fullName, photo, id }) => {
	return (
		<Link
			className={classNames(PhotoStyle.link, className)}
			to={`/profile/${id}`}
			title={fullName}
		>
			<Picture
				className={classNames(PhotoStyle.photo, "fake-photo")}
				oneXSrc={photo || "/Images/ProfileBackground/SunSet"}
				alt={fullName}
			/>
		</Link>
	);
};
