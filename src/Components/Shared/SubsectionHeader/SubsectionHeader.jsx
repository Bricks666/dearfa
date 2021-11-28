import classNames from "classnames";
import React, { memo } from "react";

import SubsectionHeaderStyle from "./SubsectionHeader.module.css";

const SubsectionHeader = memo(({ className, children }) => {
	return (
		<h3 className={classNames(SubsectionHeaderStyle.header, className)}>
			{children}
		</h3>
	);
});

export { SubsectionHeader };
