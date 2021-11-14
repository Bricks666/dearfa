import React from "react";

import { LikeConnect } from "./LikeConnect/LikeConnect";
import { Date, Photo, FullName } from "../../";

import PostStyle from "./Post.module.css";

export const Post = (props) => {
	return (
		<article className={PostStyle.post}>
			<FullName
				className={PostStyle.author}
				id={1}
				fullName={"Кирилл Цыганков"}
			/>
			<Date className={PostStyle.dateTime} date={props.post.date} />
			<Photo
				className={PostStyle.photo}
				image={{ url: "", alt: "" }}
				id={1}
				fullName={"Кирилл Цыганков"}
			/>
			<p className={PostStyle.content}>{props.post.content.text}</p>
			<LikeConnect
				className={PostStyle.like}
				status={props.post.like}
				postId={props.post.id}
			/>
		</article>
	);
};
