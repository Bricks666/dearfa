import React, { FC } from "react";
import classNames from "classnames";
import { StandardProps } from "@/interfaces/components";

import DataListStyle from "./DataList.module.css";

/* TODO: Сделать, что бы в children могли быть только элементы DataListItem */
export const DataList: FC<StandardProps> = ({ className, children }) => {
	return (
		<dl className={classNames(DataListStyle.datalist, className)}>
			{children}
		</dl>
	);
};
