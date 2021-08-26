import React from "react";
import { CreatedPosts } from "../CreatedPosts/CreatedPosts";
import { MakePost } from "../MakePost/MakePost";
import { SubsectionHeader } from "../SubsectionHeader/SubsectionHeader";

import PostsStyle from "./Posts.module.css";

function Posts(props) {
    return (
        <section className={`${props.className ?? ""} ${PostsStyle.posts}`}>
            <SubsectionHeader className={`${PostsStyle.heading}`}>
                Мои посты
            </SubsectionHeader>
            <MakePost
                className={PostsStyle.makeMessage}
                placeholder="Чем вы хотите поделиться сегодня"
                buttonMessage="Опубликовать"
                content={props.posts.newPostContent}
                id={props.id}
                dispatch={props.dispatch}
            />
            <CreatedPosts posts={props.posts.list} dispatch={props.dispatch} />
        </section>
    );
}

export { Posts };
