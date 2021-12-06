import classNames from "classnames";
import React from "react";

import ListStyle from "./List.module.css";

export const List = ({ Card, items, className }) => {
	return (
		<ul className={classNames(ListStyle.list, className)}>
			{items.map((item) => {
				return <Card {...item} key={item.id} />;
			})}
		</ul>
	);
};
