import React, { useCallback } from "react";
import { useEscListener } from "../../../Hooks/useEscListener";
import { CrossButton } from "../Buttons/CrossButton/CrossButton";

import ModalWindowStyle from "./ModalWindow.module.css";

export const ModalWindow = ({ className, close, condition, children }) => {
	useEscListener(
		useCallback(() => {
			if (condition) {
				close();
			}
		}, [close, condition]),
		condition
	);

	return condition ? (
		<div className={ModalWindowStyle.wrapper} onClick={close}>
			<div
				className={`${ModalWindowStyle.inner}  ${className ?? ""}`}
				onClick={(e) => e.stopPropagation()}
			>
				<CrossButton onClick={close} className={ModalWindowStyle.button} />
				{children}
			</div>
		</div>
	) : (
		""
	);
};
