import { ThunkDispatch } from "redux-thunk";
import { AppState, RootActions } from "../Redux";

type TypedDispatch = ThunkDispatch<AppState, undefined, RootActions>;
export type UseTypedDispatch = () => TypedDispatch;
