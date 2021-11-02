import React from "react";

import { renderContact } from "./renderContact";

import ContactsStyle from "./Contacts.module.css";

function Contacts(props) {
	const contacts = renderContact(props.contacts ?? {});

	return (
		<div className={`${ContactsStyle.contacts} ${props.className ?? ""}`}>
			{props.children}
			<span className={ContactsStyle.header}>Контакты:</span>
			<dl className={ContactsStyle.datalist}>{contacts}</dl>
		</div>
	);
}

export { Contacts };
