import { AppState, IUser } from "../Redux";

export type GetUserByIndex = (state: AppState, index: number) => IUser;
