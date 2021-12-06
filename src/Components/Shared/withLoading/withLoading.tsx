import React, { FC } from "react";
import { Loading } from "./Loading/Loading";

interface IBasicLoadingInterface {
	isLoading: boolean;
	className?: string;
}

export function withLoading<T extends IBasicLoadingInterface>(
	Component: FC<T>
): FC<T> {
	return (props) => {
		return props.isLoading ? (
			<Loading className={props.className} />
		) : (
			<Component {...props} />
		);
	};
}
