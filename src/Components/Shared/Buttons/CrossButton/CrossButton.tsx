import classNames from "classnames";
import React, { FC } from "react";
import { Button, IButton } from "../Button/Button";

import CrossButtonStyle from "./CrossButton.module.css";

/* Дописать стили для кнопки */
export const CrossButton: FC<IButton> = ({ className, ...props }) => {
	return (
		<Button
			{...props}
			className={classNames(CrossButtonStyle.button, className)}
		></Button>
	);
};
