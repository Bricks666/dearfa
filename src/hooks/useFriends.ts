import { useEffect } from 'react';
import {
	loadFriendsThunk,
	selectFriends,
	selectFriendsCount,
} from '@/models/friends';
import { useTypedDispatch, useTypedSelector } from '.';

export const useFriends = (page: number) => {
	const friendsCount = useTypedSelector(selectFriendsCount);
	const friends = useTypedSelector(selectFriends);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(loadFriendsThunk({ currentPage: page, friendsCount }));
	}, [page, friendsCount, dispatch]);

	return friends;
};
