import React, { FC } from "react";
import classNames from "classnames";
import { MakePost } from "./MakePost/MakePost";
import { SubsectionHeader } from "../Shared";
import { IOnlyClassComponent } from "../../Types/Components";
import { CreatedPostsList } from "../CreatedPostsList";

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
