import React from "react";
import { NavLink } from "react-router-dom";
import { SubsectionHeader } from "../../../Shared/SubsectionHeader/SubsectionHeader";
import { Picture } from "../../../Shared/Picture/Picture";

import DialogStyle from "./Dialog.module.css";

const Dialog = ({ className, userName, id, photos: { small } }) => {
	return (
		<li className={`${className} ${DialogStyle.dialog}`}>
			<NavLink
				to={`/dialogs/${id}`}
				className={DialogStyle.link}
				activeClassName={DialogStyle.linkActive}
				aria-label={`чат с ${userName}`}
			>
				<SubsectionHeader className={`${DialogStyle.fullName}`}>
					{userName}
				</SubsectionHeader>
				<Picture
					className={`${DialogStyle.photo} fake-photo`}
					oneXSrc={small || "/Images/ProfileBackground/SunSet"}
					twoXSrc=""
					alt={userName}
				/>
			</NavLink>
		</li>
	);
};

export { Dialog };
