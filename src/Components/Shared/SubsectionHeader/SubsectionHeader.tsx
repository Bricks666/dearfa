import classNames from "classnames";
import React, {  } from "react";

import SubsectionHeaderStyle from "./SubsectionHeader.module.css";

const SubsectionHeader = (({ className, children }) => {
	return (
		<h3 className={classNames(SubsectionHeaderStyle.header, className)}>
			{children}
		</h3>
	);
});

export { SubsectionHeader };
