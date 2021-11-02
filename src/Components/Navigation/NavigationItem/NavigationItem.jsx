import React from "react";
import { NavLink } from "react-router-dom";

import NavigationItemStyle from "./NavigationItem.module.css";

export const NavigationItem = (props) => {
	return (
		<li className={NavigationItemStyle.item}>
			<NavLink
				exact={props.exact}
				to={props.to}
				className={NavigationItemStyle.link}
				activeClassName={NavigationItemStyle.linkCurrentPage}
			>
				{props.children}
			</NavLink>
		</li>
	);
};
