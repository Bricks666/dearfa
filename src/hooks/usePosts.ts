import { useEffect } from 'react';
import { selectPosts } from '@/models/posts';
import { useTypedSelector } from '.';

export const usePosts = () => {
	const posts = useTypedSelector(selectPosts);

	useEffect(() => {
		console.log();
	}, []);

	return posts;
};
