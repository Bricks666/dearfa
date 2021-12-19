import { EmptyFunction } from "./Common";
export type UseSignout = () => IUseSignoutResponse;

interface IUseSignoutResponse {
	logout: EmptyFunction;
}
