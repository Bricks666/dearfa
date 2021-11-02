import React from "react";
import { Loading } from "./Loading/Loading";

export const withLoading = (Component) => {
	return (props) => {
		return props.isLoading ? (
			<Loading className={props.className} />
		) : (
			<Component {...props} />
		);
	};
};
