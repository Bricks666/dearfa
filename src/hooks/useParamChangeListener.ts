import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type Subscriber = (param: string | number) => unknown;

export const useParamChangeListener = (
	paramName: string,
	subscriber: Subscriber
) => {
	const params = useParams();
	const param = params[paramName] || '';

	useEffect(() => {
		if (param !== '') {
			subscriber(Number.isNaN(+param) ? param : +param);
		}
	}, [param, subscriber]);
};
