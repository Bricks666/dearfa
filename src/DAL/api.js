import axios from "axios";

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: { "API-KEY": "b5d52611-1432-460b-9a90-98ff97a4eb1b" },
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
			}
		)
	).data;
};

export const getProfile = async (id) => {
	const data = {
		...(await instance.get(`/profile/${id}`)).data,
		status: (await instance.get(`/profile/status/${id}`)).data,
	};

	return data;
};

export const unfollow = async (id) => {
	return (
		await instance.delete(`follow/${id}`, {
			withCredentials: true,
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

export const loginApi = async (email, password, rememberMe) => {
	return (
		await instance.post(
			"/auth/login",
			{
				email,
				rememberMe,
				password,
			},
			{
				withCredentials: true,
			}
		)
	).data;
};

export const logoutApi = async () => {
	return (
		await instance.delete("/auth/login", {
			withCredentials: true,
		})
	).data;
};
export const newStatus = async (newStatus) => {
	return (
		await instance.put(
			"/profile/status",
			{
				status: newStatus,
			},
			{
				withCredentials: true,
			}
		)
	).data;
};
