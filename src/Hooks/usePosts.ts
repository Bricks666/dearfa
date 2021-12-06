import { useSelector } from "react-redux";
import { postsSelectors } from "../Selectors";

export const usePosts = () => {
	const posts = useSelector(postsSelectors.getPosts);

	return { posts };
};
