import React from "react";

import { NavigationItem } from "./NavigationItem/NavigationItem";

export const RenderNavigation = (navigationItems) => {
	return navigationItems.map((item) => {
		return (
			<NavigationItem to={item.path} exact={item.exact} key={item.id}>
				{item.content}
			</NavigationItem>
		);
	});
};
