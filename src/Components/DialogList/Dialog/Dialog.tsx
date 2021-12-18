import classNames from "classnames";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { IOnlyClassComponent } from "../../../Types/Common";
import { IDialog } from "../../../Types/Redux";
import { SubsectionHeader, Picture } from "../../Shared";

import DialogStyle from "./Dialog.module.css";

interface IDialogComponent extends IOnlyClassComponent, IDialog {}

export const Dialog: FC<IDialogComponent> = ({
	className,
	userName,
	id,
	photos: { small },
}) => {
	return (
		<li className={classNames(DialogStyle.dialog, className)}>
			<NavLink
				to={`/dialogs/${id}`}
				className={({ isActive }) =>
					classNames(DialogStyle.link, { [DialogStyle.linkActive]: isActive })
				}
				aria-label={`чат с ${userName}`}
			>
				<SubsectionHeader className={DialogStyle.fullName}>
					{userName}
				</SubsectionHeader>
				<Picture
					className={classNames(DialogStyle.photo, "fake-photo")}
					oneXSrc={small || "/Images/ProfileBackground/SunSet"}
					alt={userName}
				/>
			</NavLink>
		</li>
	);
};
