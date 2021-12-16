import { EmptyFunction } from ".";

export type UseEscListener = <T>(
	subscriber: EmptyFunction,
	conditions?: Array<T>
) => void;
