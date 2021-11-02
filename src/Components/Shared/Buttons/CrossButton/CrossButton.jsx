import React from "react";

import CrossButtonStyle from "./CrossButton.module.css";

export const CrossButton = (props) => {
	return (
		<button
			onClick={props.onClick}
			className={`${CrossButtonStyle.button} ${props.className}`}
		>
			{props.children}
			<svg
				viewBox="0 0 15 15"
				className={`${CrossButtonStyle.cross} ${props.crossClassName ?? ""}`}
			>
				<path
					fillOpacity="1"
					d="M15.1 1.78L13.32 0 7.55 5.77 1.78 0 0 1.78l5.77 5.77L0 13.32l1.78 1.78 5.77-5.77 5.77 5.77 1.78-1.78-5.77-5.77z"
				/>
			</svg>
		</button>
	);
};
