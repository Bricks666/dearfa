import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadFriendsThunk } from "../Redux/Thunks/loadFriendsThunk";
import { friendsSelectors } from "../Selectors";

export const useFriends = () => {
	const friendsCount = useSelector(friendsSelectors.getCount);
	const friends = useSelector(friendsSelectors.getList);
	const dispatch = useDispatch();

	const loadFriends = useCallback(
		(page) => {
			dispatch(loadFriendsThunk(friendsCount, page));
		},
		[dispatch, friendsCount]
	);

	return { friends, loadFriends };
};
