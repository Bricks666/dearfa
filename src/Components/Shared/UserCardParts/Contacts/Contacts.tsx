import React, { FC } from "react";

import { renderContact } from "./renderContact";
import { DataList, DataListItem } from "../..";

import ContactsStyle from "./Contacts.module.css";
import { EmptyObject, IOnlyClassComponent } from "../../../../Types/Common";
import { IContacts } from "../../../../Types/Redux";

interface IContactsComponent extends IOnlyClassComponent {
	contacts: IContacts | EmptyObject;
}

const Contacts: FC<IContactsComponent> = ({ contacts }) => {
	const contactsElement = renderContact(contacts);

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
