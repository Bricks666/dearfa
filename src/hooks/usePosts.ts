import { selectPosts } from "@/models/posts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from ".";

export const usePosts = () => {
	const posts = useTypedSelector(selectPosts);
	const dispatch = useDispatch();

	useEffect(() => {
		null;
	}, []);

	return posts;
};
