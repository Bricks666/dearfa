import ky from 'ky';

export const instance = ky.create({
	credentials: 'include',
	headers: {
		'API-KEY': import.meta.env.VITE_API_KEY,
	},
	prefixUrl: import.meta.env.VITE_API_URL,
});
