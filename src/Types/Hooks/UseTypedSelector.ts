import { TypedUseSelectorHook } from "react-redux";
import { AppState } from "../Redux";

export type UseTypedSelector = TypedUseSelectorHook<AppState>;
