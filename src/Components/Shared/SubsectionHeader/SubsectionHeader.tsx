import classNames from "classnames";
import React, { FC } from "react";
import { IOnlyClassComponent } from "../../../Types/Common";

import SubsectionHeaderStyle from "./SubsectionHeader.module.css";

const SubsectionHeader: FC<IOnlyClassComponent> = ({ className, children }) => {
	return (
		<h3 className={classNames(SubsectionHeaderStyle.header, className)}>
			{children}
		</h3>
	);
};

export { SubsectionHeader };
