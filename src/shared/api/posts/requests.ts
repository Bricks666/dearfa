import { StandardServerResponse } from '../request';
import { CreatePostParams, Post } from './types';

let id = 4;

export const getAll = (): StandardServerResponse<Post[]> => {
	return {
		data: [
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
		],
		fieldsErrors: [],
		messages: [],
		resultCode: 200,
	};
};

export const create = (
	params: CreatePostParams
): StandardServerResponse<Post> => {
	return {
		data: {
			// eslint-disable-next-line no-plusplus
			id: id++,
			createdAt: new Date().toISOString(),
			authorId: 19294,
			content: params.content,
			likeCount: 0,
			liked: false,
		},

		fieldsErrors: [],
		messages: [],
		resultCode: 201,
	};
};
