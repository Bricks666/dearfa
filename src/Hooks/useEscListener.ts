import { useEffect } from "react";
import { UseEscListener } from "../Types/Hooks";

export const useEscListener: UseEscListener = (subscriber, conditions) => {
	useEffect(() => {
		window.onkeydown = (evt) => {
			debugger;
			if (evt.keyCode === 27) {
				evt.preventDefault();
				evt.stopPropagation();
				subscriber();
			}
		};

		return () => {
			window.onkeydown = null;
		};
	}, [conditions, subscriber]);
};
