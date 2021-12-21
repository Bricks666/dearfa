import classNames from "classnames";
import React, { FC, useCallback } from "react";
import { useEscListener } from "../../../Hooks/useEscListener";
import { EventHandler, IOnlyClassComponent } from "../../../Types/Common";
import { CrossButton } from "../CrossButton/CrossButton";

import ModalWindowStyle from "./ModalWindow.module.css";

interface IModalWindow extends IOnlyClassComponent {
	close: EventHandler<
		HTMLButtonElement | HTMLDivElement,
		MouseEvent | KeyboardEvent
	>;
	condition: boolean;
}

export const ModalWindow: FC<IModalWindow> = ({
	className,
	close,
	condition,
	children,
}) => {
	useEscListener(
		useCallback(() => {
			if (condition) {
				close();
			}
		}, [close, condition]),
		[condition]
	);

	return condition ? (
		<div className={ModalWindowStyle.wrapper} onClick={close} role="dialog">
			<div
				className={classNames(ModalWindowStyle.inner, className)}
				onClick={(e) => e.stopPropagation()}
			>
				<CrossButton
					onClick={close}
					className={ModalWindowStyle.button}
					disabled={false}
				/>
				{children}
			</div>
		</div>
	) : null;
};
