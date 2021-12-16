import { useEffect } from "react";
import { useParams } from "react-router";

/* Нужно нормально затипизировать */
type UseParamChangeListener = (
	paramName: string,
	subscriber: (param: string) => void
) => string | "";

export const useParamChangeListener: UseParamChangeListener = (
	paramName: string,
	subscriber: (param: string) => void
) => {
	const params = useParams();
	const param = params[paramName] || "";
	useEffect(() => {
		if (param !== "") {
			subscriber(param);
		}
	}, [param, subscriber]);

	return param;
};
