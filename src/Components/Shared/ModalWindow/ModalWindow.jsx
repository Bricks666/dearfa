import React from "react";

import ModalWindowStyle from "./ModalWindow.module.css";

export const ModalWindow = (props) => {
	return props.condition ? (
		<div
			className={`${ModalWindowStyle.wrapper} ${props.className ?? ""}`}
			onClick={props.close}
		>
			<div
				className={ModalWindowStyle.inner}
				onClick={(e) => e.stopPropagation()}
			>
				{props.children}
			</div>
		</div>
	) : (
		""
	);
};
