import classNames from "classnames";
import React, { FC } from "react";
import {
	ButtonType,
	EventHandler,
	IOnlyClassComponent,
} from "../../../../Types/Common";

import ButtonStyle from "./Button.module.css";

export interface IButton extends IOnlyClassComponent {
	disabled?: boolean;
	onClick?: EventHandler<HTMLButtonElement, MouseEvent>;
	type?: ButtonType;
	title?: string;
}

const Button: FC<IButton> = ({
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
