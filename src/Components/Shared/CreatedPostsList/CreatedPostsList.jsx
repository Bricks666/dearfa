import React from "react";

import { RenderPost } from "./RenderPost";

import CreatedPostsListStyle from "./CreatedPostsList.module.css";

export const CreatedPostsList = (props) => {
	return (
		<section className={CreatedPostsListStyle.createdPosts}>
			{RenderPost(props.posts)}
		</section>
	);
};
