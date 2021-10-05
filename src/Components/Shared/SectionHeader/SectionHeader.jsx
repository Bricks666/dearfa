import React from "react";

import SectionHeaderStyle from "./SectionHeader.module.css";

function SectionHeader(props) {
	return (
		<h2 className={`${SectionHeaderStyle.header} ${props.className ?? ""}`}>
			{props.children}
		</h2>
	);
}

export { SectionHeader };
