import classNames from "classnames";
import React from "react";

import DataListItemStyle from "./DataListItem.module.css";

export const DataListItem = ({
	className,
	termClassName,
	descClassName,
	term,
	desc,
}) => {
	return (
		<div className={classNames(DataListItemStyle.item, className)}>
			<dt className={classNames(DataListItemStyle.term, termClassName)}>
				{term}
			</dt>
			<dd className={classNames(DataListItemStyle.desc, descClassName)}>
				{desc}
			</dd>
		</div>
	);
};
