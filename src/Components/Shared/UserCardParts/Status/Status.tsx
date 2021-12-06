import React from "react";
import { DataListItem } from "../..";

export const Status = ({ children, status, className }) => {
	return (
		<DataListItem
			className={className}
			term={<>{children} Статус:</>}
			desc={status}
		/>
	);
};
