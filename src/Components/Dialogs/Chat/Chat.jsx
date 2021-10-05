import React from "react";
import { MessagesContainer } from "./Messages/MessagesContainer";
import { MakeMessageContainer } from "./MakeMessage/MakeMessageContainer";
import { Link } from "react-router-dom";

import ChatStyle from "./Chat.module.css";

function Chat(props) {
	return (
		<section className={`${props.className} ${ChatStyle.chat}`}>
			<Link className={ChatStyle.cross} to="/dialogs" />
			<MessagesContainer className={ChatStyle.messages} />

			<MakeMessageContainer
				className={ChatStyle.makeMessage}
				placeholder="Ваше сообщение"
				buttonMessage="Отправить"
			/>
		</section>
	);
}

export { Chat };
