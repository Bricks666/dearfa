import { useEffect } from "react";

export const useEscListener = (subscriber, conditions?: any) => {
	useEffect(() => {
		window.onkeydown = (evt) => {
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
