import { EmptyFunction } from ".";
import { ID } from "../Common";

export type UseLike = (postId: ID) => IUseLikeResponse;

export interface IUseLikeResponse {
	toggleLike: EmptyFunction;
}
