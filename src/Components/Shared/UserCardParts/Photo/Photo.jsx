import React from "react";
import { Link } from "react-router-dom";
import { Picture } from "../../Picture/Picture";

import PhotoStyle from "./Photo.module.css";

export const Photo = ({ className, fullName, id, photo }) => {
	return (
		<Link
			className={`${PhotoStyle.link} ${className ?? ""}`}
			to={`/profile/${id}`}
			title={fullName}
		>
			<Picture
				className={`fake-photo ${PhotoStyle.photo}`}
				oneXSrc={photo || "/Images/ProfileBackground/SunSet"}
				alt={fullName}
			/>
		</Link>
	);
};
