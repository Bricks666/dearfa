import React, { FC } from "react";
import { DataListItem } from "../..";
import { IOnlyClassComponent } from "../../../../Types/Common";

interface IStatus extends IOnlyClassComponent {
	status: string;
}

export const Status: FC<IStatus> = ({ children, status, className }) => {
	return (
		<DataListItem
			className={className}
			term={<>{children} Статус:</>}
			desc={status}
		/>
	);
};
