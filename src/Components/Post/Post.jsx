import React from "react";
import { Like } from "../Like/Like";
import { Picture } from "../Picture/Picture";
import { ParseDate } from "./ParseDate";

import PostStyle from "./Post.module.css";

function Post(props) {
    return (
        /*
        Возможно стоит вынести информацию об авторе в отдельный компонент
        Для более удобного использования(Имя и фото)
        */
        <article className={PostStyle.post}>
            <h5 className={PostStyle.author}>{props.data.authorId}</h5>
            <time className={PostStyle.dateTime} dateTime={props.data.date}>
                {ParseDate(props.data.date)}
            </time>
            <Picture
                className={`${PostStyle.photo} fake-photo`}
                oneXSrc="/Images/PhotoCap/PhotoCap"
                twoXSrc=""
                alt="Аватарка автора"
            />
            <p className={PostStyle.content}>{props.data.content}</p>
            <Like className={PostStyle.like} status={props.data.like} />
        </article>
    );
}

export { Post };
