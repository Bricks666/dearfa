import { Post } from '@/models/posts';

export const posts: Post[] = [
	{
		id: 1,
		date: new Date(),
		authorId: 1,
		content:
			'Мы пришли за мандаринами, а что нужно тебе в такой прекрасный день для единорогопада?',

		like: {
			count: 175,
			liked: false,
		},
	},
	{
		id: 2,
		date: new Date('2021-05-04T15:02:00'),
		authorId: 1,
		content: 'Магия ВК',
		like: {
			count: 37,
			liked: true,
		},
	},
	{
		id: 3,
		date: new Date('2021-03-20T15:02:00'),
		authorId: 1,
		content: 'Как ты думаешь, мы хотим спать?',
		like: {
			count: 15,
			liked: true,
		},
	},
];
