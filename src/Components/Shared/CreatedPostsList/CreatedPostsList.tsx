import React, { FC } from "react";
import classNames from "classnames";

import { RenderPost } from "./RenderPost";
import { usePosts } from "../../../Hooks";
import { IOnlyClassComponent } from "../../../Types/Common";

import CreatedPostsListStyle from "./CreatedPostsList.module.css";

export const CreatedPostsList: FC<IOnlyClassComponent> = ({ className }) => {
	const posts = usePosts();
	return (
		<section
			className={classNames(CreatedPostsListStyle.createdPosts, className)}
		>
			{RenderPost(posts)}
		</section>
	);
};
