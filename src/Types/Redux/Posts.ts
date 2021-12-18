import { ID } from "../Common";

export interface IPost {
	id: ID;
	date: Date;
	authorId: number;
	content: string;
	like: ILike;
}

export interface ILike {
	count: number;
	isLiked: boolean;
}

export enum PostsActionTypes {
	TOGGLE_LIKE = "dearFa/posts/TOGGLE_LIKE",
}

interface IToggleLikePayload {
	postId: ID;
}

interface IToggleLikeAction {
	type: PostsActionTypes.TOGGLE_LIKE;
	payload: IToggleLikePayload;
}

export type PostsActions = IToggleLikeAction;

export type ToggleLikeAC = (postId: ID) => IToggleLikeAction;
export type CreateLike = (isLiked: boolean, prevCount: number) => ILike;
