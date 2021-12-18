import { ID } from "../Common";
import { IProfileState } from "../Redux";

export type LoadUser = (id: ID) => void;

export type UseProfile = () => { loadUser: LoadUser; user: IProfileState };
