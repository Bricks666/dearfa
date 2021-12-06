import { useEffect } from "react";
import { useParams } from "react-router";

export const useParamChangeListener = (
	paramName: string,
	subscriber: Function
) => {
	const { [paramName]: param } = useParams();
	useEffect(() => {
		subscriber(param);
	}, [param, subscriber]);

	return { [paramName]: param };
};
