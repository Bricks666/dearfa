import { useTypedSelector } from ".";
import { friendsSelectors } from "../Selectors";
import { UsePageCount } from "../Types/Hooks";

export const useFriendsPageCount: UsePageCount = () => {
	return useTypedSelector(friendsSelectors.getPageCount);
};
