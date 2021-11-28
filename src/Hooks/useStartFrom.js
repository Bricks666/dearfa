import { useEffect } from "react";

export const useStartFrom = (targetElement, parentElement = window) => {
	useEffect(() => {
		if (targetElement === undefined) {
			console.log(targetElement);
			return;
		}
		const { x, y } = targetElement;
		console.log(x, y, targetElement);
		parentElement.scrollTo(x, y);
	}, [targetElement, parentElement]);
};
