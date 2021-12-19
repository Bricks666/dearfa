import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsersThunk } from "../Redux/Thunks/loadUsersThunk";
import { usersSelectors } from "../Selectors";
import { UseUsersList } from "../Types/Hooks";

export const useUsersList: UseUsersList = () => {
	const usersCount = useSelector(usersSelectors.getCount);
	const users = useSelector(usersSelectors.getList);
	const dispatch = useDispatch();
	const loadUsers = useCallback(
		(page) => {
			dispatch(loadUsersThunk(usersCount, page));
		},
		[dispatch, usersCount]
	);
	return { users, loadUsers };
};
