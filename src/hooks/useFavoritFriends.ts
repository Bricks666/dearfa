import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '.';
import {
	loadFavoriteFriendsThunk,
	resetFavoriteFriends,
	selectFavoriteFriends,
} from '@/models/favoriteFriends';

export const useFavoritFriends = () => {
	const friends = useTypedSelector(selectFavoriteFriends);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(loadFavoriteFriendsThunk());
		return () => {
			dispatch(resetFavoriteFriends());
		};
	}, [dispatch]);

	return friends;
};
