import React from "react";
import { Link } from "react-router-dom";
import { Like } from "../Like/Like";
import { Picture } from "../Picture/Picture";
import { ParseDate } from "./ParseDate";

import PostStyle from "./Post.module.css";

function Post(props) {
    return (
        <article className={PostStyle.post}>
            <Link
                className={PostStyle.authorLink}
                to={`/profile/${props.post.authorId}`}
            >
                <h5 className={PostStyle.author}>
                    {props.post.author.fullName}
                </h5>
            </Link>

            <time className={PostStyle.dateTime} dateTime={props.post.date}>
                {ParseDate(props.post.date)}
            </time>
            <Link
                className={PostStyle.photoLink}
                to={`/profile/${props.post.authorId}`}
            >
                <Picture
                    className={`${PostStyle.photo} fake-photo`}
                    oneXSrc={props.post.author.avatar.url}
                    twoXSrc=""
                    alt={props.post.author.avatar.alt}
                />
            </Link>

            <p className={PostStyle.content}>{props.post.content}</p>
            <Like className={PostStyle.like} status={props.post.like} />
        </article>
    );
}

export { Post };
