import { Post } from "@/models/posts";
import React, { FC } from "react";
import { Date, Photo, FullName, Like } from "..";

import PostStyle from "./Post.module.css";

interface PostCardProps {
	readonly post: Post;
}

export const PostCard: FC<PostCardProps> = ({ post }) => {
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
			<Like
				className={PostStyle.like}
				status={post.like}
				likeHandler={console.log}
			/>
		</article>
	);
};
