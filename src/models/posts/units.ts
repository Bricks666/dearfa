/* eslint-disable import/no-extraneous-dependencies */
import { createDomain } from 'effector-logger';
import { Post } from './types';

const PostsDomain = createDomain();

export const posts: Post[] = [
	{
		id: 1,
		date: new Date(),
		authorId: 1,
		content:
			'Мы пришли за мандаринами, а что нужно тебе в такой прекрасный день для единорогопада?',

		likeCount: 175,
		liked: false,
	},
	{
		id: 2,
		date: new Date('2021-05-04T15:02:00'),
		authorId: 1,
		content: 'Магия ВК',

		likeCount: 37,
		liked: true,
	},
	{
		id: 3,
		date: new Date('2021-03-20T15:02:00'),
		authorId: 1,
		content: 'Как ты думаешь, мы хотим спать?',

		likeCount: 15,
		liked: true,
	},
];
export const $posts = PostsDomain.store<Post[]>(posts);

export const likePost = PostsDomain.event<number>();
export const dislikePost = PostsDomain.event<number>();
