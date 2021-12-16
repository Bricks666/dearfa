import React, { ReactElement } from "react";
import { IPost } from "../../../Types/Redux";

import { Post } from "./Post/Post";

type RenderPost = (posts: IPost[]) => ReactElement[];

export const RenderPost: RenderPost = (posts) => {
	return posts.map((post) => {
		return <Post post={post} key={post.id} />;
	});
};
