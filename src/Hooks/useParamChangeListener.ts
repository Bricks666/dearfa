import { useEffect } from "react";
import { useParams } from "react-router";
import { UseParamChangeListener } from "../Types/Hooks";

/* Нужно нормально затипизировать */
export const useParamChangeListener: UseParamChangeListener = (
	paramName,
	subscriber
) => {
	const params = useParams();
	const param = params[paramName] || "";

	useEffect(() => {
		if (param !== "") {
			subscriber(param);
		}
	}, [param, subscriber]);
};
