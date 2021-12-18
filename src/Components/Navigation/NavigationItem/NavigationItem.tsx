import classNames from "classnames";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { IOnlyClassComponent } from "../../../Types/Common";

import NavigationItemStyle from "./NavigationItem.module.css";

interface INavigationItem extends IOnlyClassComponent {
	to: string;
	text: string;
}

export const NavigationItem: FC<INavigationItem> = ({ text, to }) => {
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
