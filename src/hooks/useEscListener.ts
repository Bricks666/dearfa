import { useEffect } from "react";

type Subscriber = (evt?: KeyboardEvent) => unknown;

export const useEscListener = (subscriber: Subscriber, condition?: boolean) => {
	useEffect(() => {
		window.addEventListener("keydown", (evt: KeyboardEvent) => {
			if (evt.keyCode === 27) {
				evt.preventDefault();
				evt.stopPropagation();
				subscriber(evt);
			}
		});

		return () => {
			window.onkeydown = null;
		};
	}, [condition, subscriber]);
};
