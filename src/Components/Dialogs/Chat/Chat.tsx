import React, { useCallback } from "react";
import classNames from "classnames";
import { useHistory } from "react-router";
import {
	useEscListener,
	useLoading,
	useLoadMessages,
	useParamChangeListener,
} from "../../../Hooks";

import { MakeMessage } from "./MakeMessage/MakeMessage";
import { Messages } from "./Messages/Messages";
import { Companion } from "./Companion/Companion";

import ChatStyle from "./Chat.module.css";

const Chat = ({ className }) => {
	const { loadMessages } = useLoadMessages();
	const { id } = useParamChangeListener("id", loadMessages);
	const { LoadingWrapper } = useLoading("loadingMessages");
	const history = useHistory();
	useEscListener(
		useCallback(() => {
			if (!!id !== false) {
				history.push("/dialogs");
			}
		}, [history, id])
	);

	if (!!id === false) {
		return (
			<section className={classNames(ChatStyle.chat, className)}>
				<p className={ChatStyle.withoutChat}>Пока что не открыт ни один чат</p>
			</section>
		);
	}

	return (
		<section className={classNames(ChatStyle.chat, className)}>
			<Companion className={ChatStyle.header} dialogId={+id} />
			<LoadingWrapper>
				<Messages className={ChatStyle.messages} dialogId={+id} />
				<MakeMessage
					className={ChatStyle.makeMessage}
					placeholder="Ваше сообщение"
					dialogId={+id}
				/>
			</LoadingWrapper>
		</section>
	);
};

export { Chat };
