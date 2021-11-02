import React from "react";

import { Link } from "react-router-dom";

import FullNameStyle from "./FullName.module.css";

export const FullName = ({ id, fullName, className, children }) => {
	return (
		<Link
			className={`${FullNameStyle.link} ${className ?? ""}`}
			to={`/profile/${id}`}
		>
			<h4 className={FullNameStyle.name}>{fullName || children}</h4>
		</Link>
	);
};
