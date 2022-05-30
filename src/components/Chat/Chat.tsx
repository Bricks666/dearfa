import React, { FC, useCallback } from "react";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import { useEscListener } from "@/hooks";
import { MakeMessage } from "./MakeMessage/MakeMessage";
import { Messages } from "./Messages/Messages";
import { Companion } from "./Companion/Companion";
import { StandardProps } from "@/interfaces/components";

import ChatStyle from "./Chat.module.css";

const Chat: FC<StandardProps> = ({ className }) => {
	const { id = "" } = useParams();

	const navigate = useNavigate();
	const escPressHandler = useCallback(() => {
		if (id) {
			navigate("/dialogs");
		}
	}, [navigate, id]);
	useEscListener(escPressHandler);

	return (
		<section className={classNames(ChatStyle.chat, className)}>
			<Companion className={ChatStyle.header} dialogId={+id} />
			<Messages className={ChatStyle.messages} dialogId={+id} />
			<MakeMessage /* className={ChatStyle.makeMessage} dialogId={+id}  *//>
		</section>
	);
};

export { Chat };
