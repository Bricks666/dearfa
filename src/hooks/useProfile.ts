import {
	loadProfileThunk,
	resetProfile,
	selectProfileInfo,
} from "@/models/profile";
import { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from ".";

export const useProfile = (userId: number) => {
	const profile = useTypedSelector(selectProfileInfo);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(loadProfileThunk(userId));
	}, [dispatch, userId]);

	useEffect(() => {
		return () => {
			dispatch(resetProfile());
		};
	}, [dispatch]);

	return profile;
};
