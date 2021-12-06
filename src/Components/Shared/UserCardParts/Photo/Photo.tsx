import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { Picture } from "../../Picture/Picture";

import PhotoStyle from "./Photo.module.css";

export const Photo = ({ className, fullName, photo, id }) => {
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
