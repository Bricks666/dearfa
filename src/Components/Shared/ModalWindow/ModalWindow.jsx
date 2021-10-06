import React, { useEffect } from "react";
import { CrossButton } from "../Buttons/CrossButton/CrossButton";

import ModalWindowStyle from "./ModalWindow.module.css";

export const ModalWindow = (props) => {
	useEffect(() => {
		if (props.condition) {
			window.onkeydown = (evt) => {
				if (evt.keyCode === 27) {
					props.close();
				}
			};
			console.log("Esc");
		}

		return () => {
			if (props.condition) {
				window.onkeydown = null;
				console.log("unsubscribe");
			}
		};
	}, [props.condition]);

	return props.condition ? (
		<div className={ModalWindowStyle.wrapper} onClick={props.close}>
			<div
				className={`${ModalWindowStyle.inner}  ${props.className ?? ""}`}
				onClick={(e) => e.stopPropagation()}
			>
				<CrossButton
					onClick={props.close}
					className={ModalWindowStyle.button}
				/>
				{props.children}
			</div>
		</div>
	) : (
		""
	);
};
