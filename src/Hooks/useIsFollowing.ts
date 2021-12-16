import { useTypedSelector } from ".";
import { loadingsSelectors } from "../Selectors";
import { UseIsFollowing } from "../Types/Hooks";

export const useIsFollowing: UseIsFollowing = (userId) => {
	return useTypedSelector(loadingsSelectors.getFollowings).includes(userId);
};
