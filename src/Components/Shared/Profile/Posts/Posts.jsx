import React from "react";

import { CreatedPostsListConnect } from "../../CreatedPostsListConnect/CreatedPostsListConnect";
import { MakePost } from "./MakePost/MakePost";
import { SubsectionHeader } from "../../SubsectionHeader/SubsectionHeader";

import PostsStyle from "./Posts.module.css";

const Posts = ({ className }) => {
	return (
		<section className={`${PostsStyle.posts} ${className ?? ""}`}>
			<SubsectionHeader className={`${PostsStyle.heading}`}>
				Мои посты
			</SubsectionHeader>
			<MakePost className={PostsStyle.makeMessage} />
			<CreatedPostsListConnect />
		</section>
	);
};

export { Posts };
