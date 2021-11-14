import React from "react";

import { renderContact } from "./renderContact";

import ContactsStyle from "./Contacts.module.css";

const Contacts = ({ className, contacts, children }) => {
	const contactsElement = renderContact(contacts ?? {});

	return (
		<div className={`${ContactsStyle.contacts} ${className ?? ""}`}>
			{children}
			<span className={ContactsStyle.header}>Контакты:</span>
			<dl className={ContactsStyle.datalist}>{contactsElement}</dl>
		</div>
	);
};

export { Contacts };
