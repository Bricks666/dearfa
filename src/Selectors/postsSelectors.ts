import { IPost } from "../Types/Redux";
import { StandardSelector } from "../Types/Selectors";

export const getPosts: StandardSelector<IPost[]> = (state) => {
	return state.posts;
};
