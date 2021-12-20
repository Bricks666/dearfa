import classNames from "classnames";
import React, { FC } from "react";
import { IButtonComponent } from "../../../Types/Components";

import ButtonStyle from "./Button.module.css";

const Button: FC<IButtonComponent> = ({
	className,
	type,
	onClick,
	disabled,
	children,
	title,
}) => {
	return (
		<button
			className={classNames(ButtonStyle.button, className)}
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
