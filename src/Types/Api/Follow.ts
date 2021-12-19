import { IStandardServerResponse } from ".";
import { ID } from "../Common";

export type Follow = (id: ID) => Promise<IStandardServerResponse>;

export type Unfollow = (id: ID) => Promise<IStandardServerResponse>;
