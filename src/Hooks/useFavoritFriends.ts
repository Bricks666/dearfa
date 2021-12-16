import { favoriteFriendsSelectors } from "../Selectors";
import { loadFavoriteFriendsThunk } from "../Redux/Thunks";
import { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from ".";
import { UseFavoriteFriends } from "../Types/Hooks";

export const useFavoritFriends: UseFavoriteFriends = () => {
	const friends = useTypedSelector(favoriteFriendsSelectors.getList);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(loadFavoriteFriendsThunk());
	}, [dispatch]);

	return { friends };
};
