import React, { useCallback } from "react";
import { MakeMessageContainer } from "./MakeMessage/MakeMessageContainer";
import { Messages } from "./Messages/Messages";
import { FullName } from "../../Shared/UserCardParts/FullName/FullName";
import { useEscListener } from "../../../Hooks/useEscListener";
import { Photo } from "../../Shared/UserCardParts/Photo/Photo";
import { useParamChangeListener } from "../../../Hooks/useParamChangeListener";

import ChatStyle from "./Chat.module.css";

const Chat = ({
	className,
	history,
	loadMessages,
	messages,
	authId,
	companion,
}) => {
	const { id } = useParamChangeListener(
		"id",
		useCallback((id) => {
			if (!!id !== false) {
				loadMessages(id);
			}
		}, [])
	);

	useEscListener(
		useCallback(() => {
			if (!!id !== false) {
				history.push("/dialogs");
			}
		}, [history, id])
	);

	if (!!id === false) {
		return (
			<section className={`${ChatStyle.chat} ${className ?? ""}`}>
				<p className={ChatStyle.withoutChat}>Пока что не открыт ни один чат</p>
			</section>
		);
	}

	return (
		<section className={`${ChatStyle.chat} ${className ?? ""}`}>
			<header className={ChatStyle.header}>
				<Photo
					className={ChatStyle.photo}
					photo={companion.photo}
					fullName={companion.name}
					id={companion.id}
				/>
				<FullName className={ChatStyle.name} id={companion.id}>
					{companion.name}
				</FullName>
			</header>
			<Messages
				className={ChatStyle.messages}
				messages={messages}
				authId={authId}
			/>
			<MakeMessageContainer
				className={ChatStyle.makeMessage}
				label="Новое сообщение"
				placeholder="Ваше сообщение"
				buttonMessage="Отправить"
			/>
		</section>
	);
};

export { Chat };
