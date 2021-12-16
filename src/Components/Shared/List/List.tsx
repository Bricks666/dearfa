import classNames from "classnames";
import React, { FC, ReactElement } from "react";
import { IOnlyClassComponent } from "../../../Types/Common";

import ListStyle from "./List.module.css";

interface IList<T> extends IOnlyClassComponent {
	items: T[];
	Card: FC<T>;
}

type ListComponent = <T extends { id: number }>(
	props: IList<T>
) => ReactElement;

export const List: ListComponent = ({ Card, items, className }) => {
	return (
		<ul className={classNames(ListStyle.list, className)}>
			{items.map((item) => {
				return <Card {...item} key={item.id} />;
			})}
		</ul>
	);
};
