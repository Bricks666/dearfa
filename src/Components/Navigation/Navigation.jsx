import React from "react";
import { RenderNavigation } from "./RenderNavigation";

import NavigationStyle from "./Navigation.module.css";

export const Navigation = ({ className, navigationItems }) => {
	return (
		<nav className={`${NavigationStyle.navigation} ${className ?? ""}`}>
			<ul className={NavigationStyle.list}>
				{RenderNavigation(navigationItems)}
			</ul>
		</nav>
	);
};
