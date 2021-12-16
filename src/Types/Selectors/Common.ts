import { AppState } from "../Redux";

export type StandardSelector<Response> = (state: AppState) => Response;
