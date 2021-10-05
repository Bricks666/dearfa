import React from "react";
import { Picture } from "../../../../Shared/Picture/Picture";

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
				oneXSrc={""}
				alt={""}
			/>
			<p className={MessageStyle.content}>
				<span className={MessageStyle.author}>Кто-то</span>
				{props.children}
			</p>
		</article>
	);
}

export { Message };
