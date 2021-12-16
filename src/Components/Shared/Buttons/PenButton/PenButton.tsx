import classNames from "classnames";
import React, { FC } from "react";

import { Button, IButton } from "../Button/Button";

import PenButtonStyle from "./PenButton.module.css";
/* Доделать стили, поставить карандаш на фон */

const PenButton: FC<IButton> = ({ className, title, ...props }) => {
	return (
		<Button
			{...props}
			className={classNames(PenButtonStyle.button, className)}
			title={`Изменить ${title}`}
		/>
	);
};

export { PenButton };
