import React, { FC } from "react";
import classNames from "classnames";

import DataListStyle from "./DataList.module.css";
import { IOnlyClassComponent } from "../../../Types/Common";

export const DataList: FC<IOnlyClassComponent> = ({ className, children }) => {
	return (
		<dl className={classNames(DataListStyle.datalist, className)}>
			{children}
		</dl>
	);
};
