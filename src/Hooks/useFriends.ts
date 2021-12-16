import { useCallback } from "react";
import { useTypedDispatch, useTypedSelector } from ".";
import { loadFriendsThunk } from "../Redux/Thunks/loadFriendsThunk";
import { friendsSelectors } from "../Selectors";
import { UseFriends } from "../Types/Hooks";

export const useFriends: UseFriends = () => {
	const friendsCount = useTypedSelector(friendsSelectors.getCount);
	const friends = useTypedSelector(friendsSelectors.getList);
	const dispatch = useTypedDispatch();

	const loadFriends = useCallback(
		(page) => {
			dispatch(loadFriendsThunk(friendsCount, page));
		},
		[dispatch, friendsCount]
	);

	return { friends, loadFriends };
};
