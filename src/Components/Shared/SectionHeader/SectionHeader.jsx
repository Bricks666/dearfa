import classNames from "classnames";
import React, { memo } from "react";

import SectionHeaderStyle from "./SectionHeader.module.css";

export const SectionHeader = memo(({ className, children }) => {
	return (
		<h2 className={classNames(SectionHeaderStyle.header, className)}>
			{children}
		</h2>
	);
});
