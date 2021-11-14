import React, { useCallback, useEffect } from "react";
import { MakeMessage } from "./MakeMessage/MakeMessage";
import { Messages } from "./Messages/Messages";
import { Photo, FullName } from "../../Shared";
import { useEscListener, useParamChangeListener } from "../../../Hooks";

import ChatStyle from "./Chat.module.css";

const Chat = ({
	className,
	history,
	loadMessages,
	messages,
	authId,
	companion,
	initialMessages,
}) => {
	const { id } = useParamChangeListener(
		"id",
		useCallback(
			(id) => {
				if (!!id !== false) {
					loadMessages(id);
					console.log("GET");
				}
			},
			[loadMessages]
		)
	);

	useEscListener(
		useCallback(() => {
			if (!!id !== false) {
				history.push("/dialogs");
			}
		}, [history, id])
	);

	useEffect(() => {
		initialMessages(id);
	}, [id]);

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
			<MakeMessage
				className={ChatStyle.makeMessage}
				placeholder="Ваше сообщение"
			/>
		</section>
	);
};

export { Chat };
