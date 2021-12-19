import { IResponseWithItems } from ".";
import { IUser } from "../Redux";

export type ResponseWithUsers = IResponseWithItems<IUser>;

export type GetUsers = (
	userCount: number,
	currentPage: number,
	isFriend: boolean
) => Promise<ResponseWithUsers>;
