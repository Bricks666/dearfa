import { StandardProps } from "@/interfaces/components";
import classNames from "classnames";
import React, { FC } from "react";

import PenButtonStyle from "./PenButton.module.css";

interface PenButtonProps extends StandardProps {
	readonly title: string;
}

const PenButton: FC<PenButtonProps> = ({ className, title }) => {
	return (
		<button
			className={classNames(PenButtonStyle.button, className)}
			title={title}
		/>
	);
};

export { PenButton };
