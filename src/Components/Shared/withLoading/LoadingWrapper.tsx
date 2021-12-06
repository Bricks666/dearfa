import React, { ElementType, ReactNode } from "react";
import { Loading } from "./Loading/Loading";

interface ILoadingWrapperProps {
	condition: boolean;
	className?: string;
}

type WrapperFunction = (
	props: React.PropsWithChildren<ILoadingWrapperProps>
) => ElementType | ReactNode;

export const LoadingWrapper: WrapperFunction = ({
	className,
	condition,
	children,
}) => {
	return condition ? <Loading className={className} /> : children;
};
