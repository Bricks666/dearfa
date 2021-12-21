import React, { FC } from "react";
import classNames from "classnames";
import { usePosts } from "../../Hooks";
import { IOnlyClassComponent } from "../../Types/Components";
import { Post } from "../Shared";

import CreatedPostsListStyle from "./CreatedPostsList.module.css";

export const CreatedPostsList: FC<IOnlyClassComponent> = ({ className }) => {
	const posts = usePosts();

	return (
		<section
			className={classNames(CreatedPostsListStyle.createdPosts, className)}
		>
			{posts.map((p) => (
				<Post post={p} key={p.id} />
			))}
		</section>
	);
};
