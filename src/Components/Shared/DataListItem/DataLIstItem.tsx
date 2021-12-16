import classNames from "classnames";
import React, { FC, ReactNode } from "react";
import { IOnlyClassComponent } from "../../../Types/Common";

import DataListItemStyle from "./DataListItem.module.css";

interface IDataTermItem extends IOnlyClassComponent {
	term: ReactNode;
	desc: ReactNode;
	termClassName?: string;
	descClassName?: string;
}

export const DataListItem: FC<IDataTermItem> = ({
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
