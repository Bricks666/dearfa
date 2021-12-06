import React from "react";

import ButtonStyle from "./Button.module.css";

const Button = ({ className, type, onClick, disabled, children, title }) => {
	return (
		<button
			className={`${ButtonStyle.button} ${className ?? ""} `}
			type={type}
			onClick={onClick}
			disabled={disabled}
			title={title}
		>
			{children}
		</button>
	);
};

export { Button };
