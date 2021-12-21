import React, { FC } from "react";
import classNames from "classnames";
import { useNavigation } from "../../Hooks";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import { IOnlyClassComponent } from "../../Types/Components";

import NavigationStyle from "./Navigation.module.css";

export const Navigation: FC<IOnlyClassComponent> = ({ className }) => {
	const navigationItems = useNavigation();

	return (
		<nav className={classNames(NavigationStyle.navigation, className)}>
			<ul className={NavigationStyle.list}>
				{navigationItems.map((navigationItem) => (
					<NavigationItem
						to={navigationItem.path}
						text={navigationItem.text}
						key={navigationItem.id}
					/>
				))}
			</ul>
		</nav>
	);
};
