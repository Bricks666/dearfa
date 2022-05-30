import classNames from "classnames";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { SubsectionHeader, Picture } from "@/components/Shared";
import { StandardProps } from "@/interfaces/components";
import { Dialog } from "@/models/dialogs";

import DialogStyle from "./Dialog.module.css";

interface DialogProps extends StandardProps, Dialog {}

export const DialogCard: FC<DialogProps> = ({
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
