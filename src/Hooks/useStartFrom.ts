import { useEffect } from "react";
import { UseStartFrom } from "../Types/Hooks";

export const useStartFrom: UseStartFrom = (targetElement, parentElement) => {
	useEffect(() => {
		if (targetElement === undefined) {
			console.log(targetElement);
			return;
		}
		/* const { x, y } = targetElement.; */
		/* console.log(x, y, targetElement);
		parentElement.scrollTo(x, y); */
	}, [targetElement, parentElement]);
};
