import React, { ReactElement } from "react";
import { EmptyObject } from "../../../../Types/Common";
import { IContacts } from "../../../../Types/Redux";

import { ContactsItem } from "./ContactsItem/ContactsItem";

type RenderContacts = (contacts: IContacts | EmptyObject) => ReactElement[];

export const renderContact: RenderContacts = (contacts) => {
	return Object.entries(contacts)
		.filter((pair) => Boolean(pair[1]))
		.map((pair) => {
			return (
				<ContactsItem term={pair[0]} description={pair[1]} key={pair[0]} />
			);
		});
};
