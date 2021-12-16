import { EmptyFunction } from ".";
import { IUser } from "../Redux";

export type UseFollow = (user: IUser) => { follow: EmptyFunction };
