import React from "react";
import { Post } from "../Post/Post";

import CreatedPostsStyle from "./CreatedPosts.module.css";

function CreatedPosts(props) {
    const RenderPost = (posts) => {
        return posts.map((post, index) => {
            return <Post data={post} key={index} />;
        });
    };

    return (
        <section className={CreatedPostsStyle.createdPosts}>
            {RenderPost(props.posts)}
        </section>
    );
}

export { CreatedPosts };
