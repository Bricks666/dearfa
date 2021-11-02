import React from "react";

import { CreatedPostsListContainer } from "../../CreatedPostsListContainer/CreatedPostsListContainer";
import { MakePostContainer } from "./MakePost/MakePostContainer";
import { SubsectionHeader } from "../../SubsectionHeader/SubsectionHeader";

import PostsStyle from "./Posts.module.css";

function Posts(props) {
	return (
		<section className={`${props.className ?? ""} ${PostsStyle.posts}`}>
			<SubsectionHeader className={`${PostsStyle.heading}`}>
				Мои посты
			</SubsectionHeader>
			<MakePostContainer
				className={PostsStyle.makeMessage}
				label="Новый пост"
				placeholder="Чем вы хотите поделиться сегодня"
				buttonMessage="Опубликовать"
			/>
			<CreatedPostsListContainer />
		</section>
	);
}

export { Posts };
