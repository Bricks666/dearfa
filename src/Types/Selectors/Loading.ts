import { AppState, LoadingTypes } from "../Redux";

export type GetLoadingByName = (state: AppState, name: LoadingTypes) => boolean;
