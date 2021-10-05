import axios from "axios";

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const getAuth = async () => {
	return (
		await instance.get("auth/me", {
			withCredentials: true,
		})
	).data;
};

export const follow = async (id) => {
	return (
		await instance.post(
			`follow/${id}`,
			{},
			{
				withCredentials: true,
				headers: { "API-KEY": "8991c970-a910-48aa-8f58-0b57f2e3e339" },
			}
		)
	).data;
};

export const getProfile = async (id) => {
	return (
		await instance.get(`profile/${id}`, {
			withCredentials: true,
		})
	).data;
};

export const unfollow = async (id) => {
	return (
		await instance.delete(`follow/${id}`, {
			withCredentials: true,
			headers: { "API-KEY": "8991c970-a910-48aa-8f58-0b57f2e3e339" },
		})
	).data;
};

export const getUsers = async (usersCount, currentPage) => {
	return (
		await instance.get(`users?count=${usersCount}&page=${currentPage}`, {
			withCredentials: true,
		})
	).data;
};

export const getFriends = async (friendsCount, currentPage) => {
	return (
		await instance.get(
			`users?count=${friendsCount}&page=${currentPage}&friend=true`,
			{
				withCredentials: true,
			}
		)
	).data;
};

export const getFavoriteFriends = async () => {
	return (
		await instance.get("users?count=6&page=1&friend=true", {
			withCredentials: true,
		})
	).data;
};
