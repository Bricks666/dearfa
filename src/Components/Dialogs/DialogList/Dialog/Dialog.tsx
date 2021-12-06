import classNames from "classnames";
import React, {  } from "react";
import { NavLink } from "react-router-dom";
import { SubsectionHeader, Picture } from "../../../Shared";

import DialogStyle from "./Dialog.module.css";

export const Dialog = (({ className, userName, id, photos: { small } }) => {
	return (
		<li className={classNames(DialogStyle.dialog, className)}>
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
});
