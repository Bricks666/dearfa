import React from "react";
import { Like } from "../Like/Like";
import { Picture } from "../Picture/Picture";
import { ParseDate } from "./ParseDate";

import PostStyle from "./Post.module.css";

function Post(props) {
    return (
        <article className={PostStyle.post}>
            <h5 className={PostStyle.author}>{props.post.author.fullName}</h5>
            <time className={PostStyle.dateTime} dateTime={props.post.date}>
                {ParseDate(props.post.date)}
            </time>
            <Picture
                className={`${PostStyle.photo} fake-photo`}
                oneXSrc={props.post.author.avatar.url}
                twoXSrc=""
                alt={props.post.author.avatar.alt}
            />
            <p className={PostStyle.content}>{props.post.content}</p>
            <Like className={PostStyle.like} status={props.post.like} />
        </article>
    );
}

export { Post };
