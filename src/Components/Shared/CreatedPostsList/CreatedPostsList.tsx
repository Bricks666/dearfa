import React from "react";
import classNames from "classnames";

import { RenderPost } from "./RenderPost";
import { usePosts } from "../../../Hooks";

import CreatedPostsListStyle from "./CreatedPostsList.module.css";

export const CreatedPostsList = ({ className }) => {
	const { posts } = usePosts();
	return (
		<section
			className={classNames(CreatedPostsListStyle.createdPosts, className)}
		>
			{RenderPost(posts)}
		</section>
	);
};
