import React from "react";
import classNames from "classnames";

import DataListStyle from "./DataList.module.css";

export const DataList = ({ className, children }) => {
	return (
		<dl className={classNames(DataListStyle.datalist, className)}>
			{children}
		</dl>
	);
};
