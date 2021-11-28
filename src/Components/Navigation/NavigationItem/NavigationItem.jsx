import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import NavigationItemStyle from "./NavigationItem.module.css";

export const NavigationItem = memo(
	({ children, to, exact }) => {
		return (
			<li className={NavigationItemStyle.item}>
				<NavLink
					exact={exact}
					to={to}
					className={NavigationItemStyle.link}
					activeClassName={NavigationItemStyle.linkCurrentPage}
				>
					{children}
				</NavLink>
			</li>
		);
	},
	(...data) => {
		return !!console.log(data);
	}
);
