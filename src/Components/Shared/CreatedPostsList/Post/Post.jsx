import React from "react";

import { LikeContainer } from "./LikeContainer/LikeContainer";
import { Date } from "../../UserCardParts/Date/Date";
import { Photo } from "../../UserCardParts/Photo/Photo";
import { FullName } from "../../UserCardParts/FullName/FullName";

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
			<LikeContainer
				className={PostStyle.like}
				status={props.post.like}
				postId={props.post.id}
			/>
		</article>
	);
};
