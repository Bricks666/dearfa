import React, { FC } from "react";

import { Like } from "./Like/Like";
import { Date, Photo, FullName } from "../../";

import PostStyle from "./Post.module.css";
import { IPost } from "../../../../Types/Redux";

interface IPostComponent {
	post: IPost;
}

export const Post: FC<IPostComponent> = ({ post }) => {
	return (
		<article className={PostStyle.post}>
			<FullName className={PostStyle.author} id={1}>
				Кирилл Цыганков
			</FullName>
			<Date className={PostStyle.dateTime} date={post.date.toLocaleString()} />
			<Photo
				className={PostStyle.photo}
				photo=""
				id={1}
				fullName={"Кирилл Цыганков"}
			/>
			<p className={PostStyle.content}>{post.content}</p>
			<Like className={PostStyle.like} status={post.like} postId={post.id} />
		</article>
	);
};
