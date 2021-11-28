import React, { memo } from "react";
import { RenderNavigation } from "./RenderNavigation";
import classNames from "classnames";

import NavigationStyle from "./Navigation.module.css";
import { useNavigation } from "../../Hooks";

export const Navigation = memo(({ className }) => {
	const navigationItems = useNavigation();
	return (
		<nav className={classNames(NavigationStyle.navigation, className)}>
			<ul className={NavigationStyle.list}>
				{RenderNavigation(navigationItems)}
			</ul>
		</nav>
	);
});
