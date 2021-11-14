import React from "react";

import WrapperStyle from "./Wrapper.module.css";

export const Wrapper = ({ className, children }) => {
	return (
		<div className={`${WrapperStyle.wrapper} ${className ?? ""}`}>
			{children}
		</div>
	);
};
