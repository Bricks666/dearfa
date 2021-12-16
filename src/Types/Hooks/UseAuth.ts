import { authSelectors } from "../../Selectors";
import { EmptyFunction } from "./Common";

export type UseAuth = () => IUseAuthResponse;

interface IUseAuthResponse extends ReturnType<typeof authSelectors.getAuth> {
	auth: EmptyFunction;
}
