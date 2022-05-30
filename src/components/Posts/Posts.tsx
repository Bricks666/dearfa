import React, { FC } from "react";
import classNames from "classnames";
import { CreatePost } from "./CreatePost/CreatePost";
import { SubsectionHeader } from "../Shared";
import { CreatedPostsList } from "../CreatedPostsList";
import { StandardProps } from "@/interfaces/components";

import PostsStyle from "./Posts.module.css";

const Posts: FC<StandardProps> = ({ className }) => {
	return (
		<section className={classNames(PostsStyle.posts, className)}>
			<SubsectionHeader className={`${PostsStyle.heading}`}>
				Мои посты
			</SubsectionHeader>
			<CreatePost className={PostsStyle.makeMessage} />
			<CreatedPostsList />
		</section>
	);
};

export { Posts };
