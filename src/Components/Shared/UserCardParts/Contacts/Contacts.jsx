import React from "react";

import { renderContact } from "./renderContact";

import ContactsStyle from "./Contacts.module.css";

function Contacts(props) {
	const contacts = renderContact(props.contacts ?? {});
	if (contacts.length === 0) {
		return null;
	}
	return (
		<dl className={`${props.className ?? ""} ${ContactsStyle.contacts}`}>
			<span className={ContactsStyle.header}>Контакты:</span>
			{contacts}
		</dl>
	);
}

export { Contacts };
