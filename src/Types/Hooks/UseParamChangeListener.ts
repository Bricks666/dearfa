export type Subscriber = (param: string) => void;

export type UseParamChangeListener = (
	paramName: string,
	subscriber: Subscriber
) => void;
