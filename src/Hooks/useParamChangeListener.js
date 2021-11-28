import { useEffect } from "react";
import { useParams } from "react-router";

export const useParamChangeListener = (paramName, subscriber) => {
	const { [paramName]: param } = useParams();
	useEffect(() => {
		subscriber(param);
	}, [param, subscriber]);

	return { [paramName]: param };
};
