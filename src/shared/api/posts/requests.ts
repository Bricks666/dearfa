import { StandardServerResponse } from '../request';
import { CreatePostParams, MarkPostParams, Post } from './types';

const posts = [
	{
		id: 1,
		createdAt: '2022-05-04T15:02:00',
		authorId: 19294,
		content:
			'Мы пришли за мандаринами, а что нужно тебе в такой прекрасный день для единорогопада?',

		likeCount: 175,
		liked: false,
	},
	{
		id: 2,
		createdAt: '2021-05-04T15:02:00',
		authorId: 19294,
		content: 'Магия ВК',

		likeCount: 37,
		liked: true,
	},
	{
		id: 3,
		createdAt: '2021-03-20T15:02:00',
		authorId: 19294,
		content: 'Как ты думаешь, мы хотим спать?',

		likeCount: 15,
		liked: true,
	}
];

export const getAll = (): StandardServerResponse<Post[]> => {
	return {
		data: posts,
		fieldsErrors: [],
		messages: [],
		resultCode: 200,
	};
};

export const create = (
	params: CreatePostParams
): StandardServerResponse<Post> => {
	const post: Post = {
		id: posts.length + 1,
		createdAt: new Date().toISOString(),
		authorId: 19294,
		content: params.content,
		likeCount: 0,
		liked: false,
	};

	posts.push(post);

	return {
		data: post,

		fieldsErrors: [],
		messages: [],
		resultCode: 201,
	};
};

export const like = (params: MarkPostParams): StandardServerResponse<Post> => {
	const post = posts.find((post) => post.id === params.id);

	if (!post) {
		throw new Error('Not found');
	}

	if (post.liked) {
		throw new Error('Liked');
	}

	post.likeCount += 1;
	post.liked = true;

	return {
		data: post,

		fieldsErrors: [],
		messages: [],
		resultCode: 201,
	};
};

export const dislike = (
	params: MarkPostParams
): StandardServerResponse<Post> => {
	const post = posts.find((post) => post.id === params.id);

	if (!post) {
		throw new Error('Not found');
	}

	if (!post.liked) {
		throw new Error('Not liked');
	}

	post.likeCount -= 1;
	post.liked = false;

	return {
		data: post,

		fieldsErrors: [],
		messages: [],
		resultCode: 201,
	};
};
