import { ThunkDispatch } from "redux-thunk";
import { AppState, RootActions } from "../Redux";

export type TypedDispatch = ThunkDispatch<AppState, undefined, RootActions>;
