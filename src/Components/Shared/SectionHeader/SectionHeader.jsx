import React from "react";

import SectionHeaderStyle from "./SectionHeader.module.css";

export const SectionHeader = ({ className, children }) => {
	return (
		<h2 className={`${SectionHeaderStyle.header} ${className ?? ""}`}>
			{children}
		</h2>
	);
};
