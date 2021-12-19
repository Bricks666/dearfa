import React from "react";
import { useTypedSelector } from ".";
import { Loading } from "../Components/Shared/Loading/Loading";
import { loadingsSelectors } from "../Selectors";
import { UseLoading, LoadingWrapper } from "../Types/Hooks";

export const useLoading: UseLoading = (loadingName) => {
	const loadingStatus = useTypedSelector((state) =>
		loadingsSelectors.getLoadingByName(state, loadingName)
	);
	const LoadingWrapper: LoadingWrapper = ({ children, className }) => {
		return loadingStatus ? <Loading className={className} /> : <>{children}</>;
	};

	return { LoadingWrapper };
};
