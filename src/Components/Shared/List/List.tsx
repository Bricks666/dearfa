import classNames from "classnames";
import React from "react";
import { ListComponent } from "../../../Types/Components";

import ListStyle from "./List.module.css";

export const List: ListComponent = ({ Card, items, className }) => {
	return (
		<ul className={classNames(ListStyle.list, className)}>
			{items.map((item) => {
				return <Card {...item} key={item.id} />;
			})}
		</ul>
	);
};
