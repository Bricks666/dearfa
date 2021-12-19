import { useTypedSelector } from ".";
import { postsSelectors } from "../Selectors";
import { UsePosts } from "../Types/Hooks";

export const usePosts: UsePosts = () => {
	return useTypedSelector(postsSelectors.getPosts);
};
