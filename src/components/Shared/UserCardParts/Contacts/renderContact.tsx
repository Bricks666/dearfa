import React, { ReactElement } from 'react';
import { EmptyObject } from '@/interfaces/common';
import { Contacts } from '@/models/profile';
import { ContactsItem } from './ContactsItem/ContactsItem';

type RenderContacts = (contacts: Contacts | EmptyObject) => ReactElement[];

export const renderContact: RenderContacts = (contacts) => {
	return Object.entries(contacts)
		.filter((pair) => Boolean(pair[1]))
		.map((pair) => {
			return (
				<ContactsItem
					term={pair[0]}
					description={pair[1] as string}
					key={pair[0]}
				/>
			);
		});
};
