import React from "react";

import { Button } from "../Button/Button";

import PenButtonStyle from "./PenButton.module.css";

const PenButton = React.memo(({ className, penClass, title, ...props }) => {
	return (
		<Button
			{...props}
			className={`${PenButtonStyle.button} ${className ?? ""}`}
			title={`Изменить ${title}`}
		>
			<svg
				className={`${PenButtonStyle.pen} ${penClass ?? ""}`}
				viewBox="0 0 512 512"
			>
				<path d="M454 133 168 423l-72-75L381 59c9-9 25-9 34 0l39 41c9 9 9 24 0 33zM78 387l49 52-67 14 18-66zM483 71l-39-40a64 64 0 0 0-92-1L53 333c-2 2-4 5-5 9L12 475c-4 17 4 28 20 26l141-30c4-1 7-3 10-6l299-303c25-25 25-66 1-91z" />
			</svg>
		</Button>
	);
});

export { PenButton };
