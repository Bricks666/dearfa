import { LoadingTypes } from "./../Redux/Loadings";
import { FC } from "react";
import { IOnlyClassComponent } from "./../Common/Common";

export type LoadingWrapper = FC<IOnlyClassComponent>;

export type UseLoading = (loadingName: LoadingTypes) => LoadingWrapper;
