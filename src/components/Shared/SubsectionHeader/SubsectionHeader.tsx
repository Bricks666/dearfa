import React, { FC } from "react";
import { StandardProps } from "@/interfaces/components";
import classNames from "classnames";

import SubsectionHeaderStyle from "./SubsectionHeader.module.css";

const SubsectionHeader: FC<StandardProps> = ({ className, children }) => {
	return (
		<h3 className={classNames(SubsectionHeaderStyle.header, className)}>
			{children}
		</h3>
	);
};

export { SubsectionHeader };
