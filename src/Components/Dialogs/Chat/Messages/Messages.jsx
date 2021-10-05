import React from "react";
import { RenderMessages } from "./RenderMessages";

import MessagesStyle from "./Messages.module.css";

/* Стоит поменять название, например поставить текущий чат или текущий диалог */
function Messages(props) {
	return (
		<section
			className={`${props.className} ${MessagesStyle.messages}`}
			aria-label={"чат с кем-то"}
		>
			{RenderMessages(props.messages, MessagesStyle.message)}
		</section>
	);
}

export { Messages };
