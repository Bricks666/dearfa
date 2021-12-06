import React from "react";

import { Like } from "./Like/Like";
import { Date, Photo, FullName } from "../../";

import PostStyle from "./Post.module.css";

export const Post = ({ post }) => {
	return (
		<article className={PostStyle.post}>
			<FullName
				className={PostStyle.author}
				id={1}
				fullName={"Кирилл Цыганков"}
			/>
			<Date className={PostStyle.dateTime} date={post.date} />
			<Photo
				className={PostStyle.photo}
				image={{ url: "", alt: "" }}
				id={1}
				fullName={"Кирилл Цыганков"}
			/>
			<p className={PostStyle.content}>{post.content.text}</p>
			<Like
				className={PostStyle.like}
				status={post.like}
				postId={post.id}
			/>
		</article>
	);
};
