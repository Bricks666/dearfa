import React from "react";
import { Like } from "../Like/Like";
import { Picture } from "../Picture/Picture";
import { ParseDate } from "./ParseDate";

import PostStyle from "./Post.module.css";

function Post(props) {
    return (
        <article className={PostStyle.post}>
            <h5 className={PostStyle.author}>{props.data.author.fullName}</h5>
            <time className={PostStyle.dateTime} dateTime={props.data.date}>
                {ParseDate(props.data.date)}
            </time>
            <Picture
                className={`${PostStyle.photo} fake-photo`}
                oneXSrc={props.data.author.avatar.url}
                twoXSrc=""
                alt={props.data.author.avatar.alt}
            />
            <p className={PostStyle.content}>{props.data.content}</p>
            <Like className={PostStyle.like} status={props.data.like} />
        </article>
    );
}

export { Post };
