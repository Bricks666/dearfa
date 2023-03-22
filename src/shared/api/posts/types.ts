import { Boolean, Number, Record, String, Static } from 'runtypes';
import { RTDateType } from '@/shared/types';

export const RTPost = Record({
	id: Number,
	createdAt: RTDateType,
	content: String,
	authorId: Number,
	liked: Boolean,
	likeCount: Number,
});

export interface Post extends Static<typeof RTPost> {}

export interface CreatePostParams extends Pick<Post, 'content'> {}

export interface MarkPostParams {
	readonly id: number;
}
