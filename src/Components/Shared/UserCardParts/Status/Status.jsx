import React from "react";

import StatusStyle from "./Status.module.css";

export const Status = (props) => {
	return (
		<p className={`${StatusStyle.wrapper} ${props.className ?? ""}`}>
			Статус: <span className={StatusStyle.status}>{props.status}</span>
		</p>
	);
};
