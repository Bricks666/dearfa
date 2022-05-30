import React, { FC } from "react";
import { renderContact } from "./renderContact";
import { DataList, DataListItem } from "../..";
import { StandardProps } from "@/interfaces/components";
import { Contacts } from "@/models/profile";
import { EmptyObject } from "@/interfaces/common";

import ContactsStyle from "./Contacts.module.css";

interface IContactsComponent extends StandardProps {
	readonly contacts: Contacts | EmptyObject;
}

const Contacts: FC<IContactsComponent> = ({ contacts }) => {
	const contactsElement = renderContact(contacts);

	return (
		<DataListItem
			className={ContactsStyle.contacts}
			term="Контакты: "
			description={
				<DataList className={ContactsStyle.datalist}>
					{contactsElement}
				</DataList>
			}
		/>
	);
};

export { Contacts };
