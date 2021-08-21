import React from "react";
import { Picture } from "../Picture/Picture";

import MessageStyle from "./Message.module.css";

/*
Подумать об выносе содержания сообщения в отдельное место,
Добавлении в данные id, даты публикации и иных сопроводительных данных
*/

function Message(props) {
    return (
        <article className={`${props.className ?? ""} ${MessageStyle.message}`}>
            <Picture
                className={`${MessageStyle.photo} fake-photo`}
                oneXSrc={props.author.avatar.url}
                alt={props.author.avatar.alt}
            />
            <p className={MessageStyle.content}>
                <span className={MessageStyle.author}>
                    {props.author.fullName}
                </span>
                {props.children}
            </p>
        </article>
    );
}

export { Message };
