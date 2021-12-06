import { useSelector, useDispatch } from "react-redux";
import { favoriteFriendsSelectors } from "../Selectors";
import { loadFavoriteFriendsThunk } from "../Redux/Thunks";
import { useEffect } from "react";

export const useFavoritFriends = () => {
	const friends = useSelector(favoriteFriendsSelectors.getList);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadFavoriteFriendsThunk());
	}, [dispatch]);

	return { friends };
};
