import React, { PropsWithChildren } from "react";

import { useSelector } from "react-redux";
import { Loading } from "../Components/Shared/withLoading/Loading/Loading";
import { loadingsSelectors } from "../Selectors";

interface ILoadingWrapper {
	className?: string;
}

export const useLoading = (loadingName: string) => {
	const loadingStatus = useSelector((state) =>
		loadingsSelectors.getLoadingByName(state, loadingName)
	);
	const LoadingWrapper = ({
		children,
		className,
	}: PropsWithChildren<ILoadingWrapper>) => {
		return loadingStatus ? <Loading className={className} /> : children;
	};

	return { LoadingWrapper };
};
