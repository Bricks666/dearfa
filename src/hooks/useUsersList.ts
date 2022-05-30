import {
	loadUsersThunk,
	resetUsers,
	selectUsers,
	selectUsersCount,
} from "@/models/users";
import { useEffect } from "react";
import { useTypedDispatch } from "./useTypedDispatch";
import { useTypedSelector } from "./useTypedSelector";

export const useUsersList = (page: number) => {
	const usersCount = useTypedSelector(selectUsersCount);
	const users = useTypedSelector(selectUsers);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(loadUsersThunk({ page, usersCount }));
	}, [dispatch, page, usersCount]);

	useEffect(() => {
		return () => {
			dispatch(resetUsers());
		};
	}, [dispatch]);

	return users;
};
