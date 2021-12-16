import React, { FC } from "react";

import classNames from "classnames";
import { MakePost } from "./MakePost/MakePost";
import { SubsectionHeader, CreatedPostsList } from "../Shared";
import { IOnlyClassComponent } from "../../Types/Common";

import PostsStyle from "./Posts.module.css";

const Posts: FC<IOnlyClassComponent> = ({ className }) => {
	return (
		<section className={classNames(PostsStyle.posts, className)}>
			<SubsectionHeader className={`${PostsStyle.heading}`}>
				Мои посты
			</SubsectionHeader>
			<MakePost className={PostsStyle.makeMessage} />
			<CreatedPostsList />
		</section>
	);
};

export { Posts };
