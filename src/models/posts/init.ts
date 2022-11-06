import { sample } from 'effector';
import { $posts, dislikePost, likePost } from './units';

sample({
	clock: likePost,
	source: $posts,
	fn: (posts, postId) => {
		return posts.map((post) =>
			post.id === postId
				? { ...post, liked: true, likeCount: post.likeCount + 1 }
				: post
		);
	},
	target: $posts,
});

sample({
	clock: dislikePost,
	source: $posts,
	fn: (posts, postId) => {
		return posts.map((post) =>
			post.id === postId
				? { ...post, liked: false, likeCount: post.likeCount - 1 }
				: post
		);
	},
	target: $posts,
});
