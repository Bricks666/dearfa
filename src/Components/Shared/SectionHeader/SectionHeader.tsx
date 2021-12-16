import React, { FC } from "react";
import classNames from "classnames";
import { IOnlyClassComponent } from "../../../Types/Common";

import SectionHeaderStyle from "./SectionHeader.module.css";

export const SectionHeader: FC<IOnlyClassComponent> = ({ className, children }) => {
	return (
		<h2 className={classNames(SectionHeaderStyle.header, className)}>
			{children}
		</h2>
	);
};
