import React, { FC, useCallback } from "react";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import {
	useEscListener,
	useLoading,
	useLoadMessages,
	useParamChangeListener,
} from "../../Hooks";

import { MakeMessage } from "./MakeMessage/MakeMessage";
import { Messages } from "./Messages/Messages";
import { Companion } from "./Companion/Companion";
import { IOnlyClassComponent } from "../../Types/Common";

import ChatStyle from "./Chat.module.css";

const Chat: FC<IOnlyClassComponent> = ({ className }) => {
	const { id = "" } = useParams();
	const { loadMessages } = useLoadMessages(id);
	useParamChangeListener("id", loadMessages);
	const LoadingWrapper = useLoading("loadingMessages");
	const navigate = useNavigate();
	const escPressHandler = useCallback(() => {
		if (!!id !== false) {
			navigate("/dialogs");
		}
	}, [navigate, id]);
	useEscListener(escPressHandler);

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
			</LoadingWrapper>
			<MakeMessage className={ChatStyle.makeMessage} dialogId={+id} />
		</section>
	);
};

export { Chat };
