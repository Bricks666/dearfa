import React from "react";

import ButtonStyle from "./Button.module.css";

export const Button = React.memo(
	({ className, type, onClick, disabled, children, title }) => {
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
	}
);
