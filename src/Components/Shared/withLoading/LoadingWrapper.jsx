import React from "react";
import { Loading } from "./Loading/Loading";

export const LoadingWrapper = ({ className, condition, children }) => {
	return condition ? <Loading className={className} /> : children;
};
