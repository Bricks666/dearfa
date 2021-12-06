export const initialState = {
	profile: {
		userId: 0,
		fullName: "",
		photos: {
			large: "/Images/Ava/Cosmic-animals",
			alt: "Аватарка...",
		},
		contacts: {},
		followed: false,
	},
	auth: {
		userId: null,
		login: null,
	},
	dialogs: [],
	messages: {},
	users: {
		list: [],
		totalUsers: 0,
		pageCount: 0,
		usersCount: 10,
	},
	friends: {
		list: [],
		pageCount: 0,
		friendsCount: 10,
		totalCount: 0,
	},
	favoriteFriends: {
		list: [],
		friendsCount: 0,
	},
	posts: {
		list: [
			{
				id: 1,
				date: new Date(),
				authorId: 1,
				content: {
					text: "Мы пришли за мандаринами, а что нужно тебе в такой прекрасный день для единорогопада?",
				},
				like: {
					count: 175,
					isLiked: false,
				},
			},
			{
				id: 2,
				date: new Date("2021-05-04T15:02:00"),
				authorId: 1,
				content: { text: "Магия ВК" },
				like: {
					count: 37,
					isLiked: true,
				},
			},
			{
				id: 3,
				date: new Date("2021-03-20T15:02:00"),
				authorId: 1,
				content: { text: "Как ты думаешь, мы хотим спать?" },
				like: {
					count: 15,
					isLiked: true,
				},
			},
		],
	},
	login: {
		isLogin: false,
		captchaUrl: null,
	},
	registration: {},
	navigation: [
		{
			path: "/profile/",
			content: "Профиль",
			exact: true,
			id: 1,
		},
		{
			path: "/dialogs",
			content: "Сообщения",
			id: 2,
		},
		{
			path: "/friends/1",
			content: "Друзья",
			id: 3,
		},
		{
			path: "/news",
			content: "Новости",
			id: 4,
		},
		{
			path: "/music",
			content: "Музыка",
			id: 5,
		},
		{
			path: "/users/1",
			content: "Пользователи",
			exact: true,
			id: 6,
		},
		{
			path: "/settings",
			content: "Настройки",
			id: 7,
		},
	],
	loadings: {
		loadingAuth: true,
		loadingProfile: false,
		loadingUsers: false,
		loadingFriends: false,
		loadingFavoriteFriends: false,
		loadingDialogs: false,
		loadingMessages: false,
		following: [],
	},
};
