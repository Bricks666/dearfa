import React, { FC } from "react";
import { useTypedSelector } from ".";
import { Loading } from "../Components/Shared/Loading/Loading";
import { loadingsSelectors } from "../Selectors";
import { IOnlyClassComponent } from "../Types/Common";
import { LoadingTypes } from "../Types/Redux";

type LoadingWrapper = FC<IOnlyClassComponent>;

type UseLoading = (loadingName: LoadingTypes) => LoadingWrapper;

export const useLoading: UseLoading = (loadingName) => {
	const loadingStatus = useTypedSelector((state) =>
		loadingsSelectors.getLoadingByName(state, loadingName)
	);
	const LoadingWrapper: LoadingWrapper = ({ children, className }) => {
		return loadingStatus ? <Loading className={className} /> : <>{children}</>;
	};

	return LoadingWrapper;
};
