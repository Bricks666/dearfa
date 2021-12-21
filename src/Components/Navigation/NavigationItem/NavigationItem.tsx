import classNames from "classnames";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { INavigationItemComponent } from "../../../Types/Components";

import NavigationItemStyle from "./NavigationItem.module.css";

export const NavigationItem: FC<INavigationItemComponent> = ({ text, to }) => {
	return (
		<li className={NavigationItemStyle.item}>
			<NavLink
				to={to}
				className={({ isActive }) =>
					classNames(NavigationItemStyle.link, {
						[NavigationItemStyle.linkCurrentPage]: isActive,
					})
				}
			>
				{text}
			</NavLink>
		</li>
	);
};
