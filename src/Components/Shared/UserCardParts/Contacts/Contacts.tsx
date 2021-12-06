import React from "react";

import { renderContact } from "./renderContact";
import { DataList, DataListItem } from "../..";

import ContactsStyle from "./Contacts.module.css";

const Contacts = ({ contacts }) => {
	const contactsElement = renderContact(contacts || {});

	return (
		<DataListItem
			className={ContactsStyle.contacts}
			term="Контакты: "
			desc={
				<DataList className={ContactsStyle.datalist}>
					{contactsElement}
				</DataList>
			}
		/>
	);
};

export { Contacts };
