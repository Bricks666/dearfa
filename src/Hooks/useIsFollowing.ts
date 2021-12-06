import { useSelector } from "react-redux";
import { loadingsSelectors } from "../Selectors";

export const useIsFollowing = (userId) => {
	return useSelector(loadingsSelectors.getFollowings).includes(userId);
};
