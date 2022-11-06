import React, { FC } from 'react';
import { renderContact } from './renderContact';
import { DataList, DataListItem } from '../..';
import { CommonProps } from '@/types';
import { Contacts as ContactsModel } from '@/models/profile';
import { EmptyObject } from '@/types';

import styles from './Contacts.module.css';

interface IContactsComponent extends CommonProps {
	readonly contacts: ContactsModel | EmptyObject;
}

const Contacts: FC<IContactsComponent> = ({ contacts }) => {
	const contactsElement = renderContact(contacts);

	return (
		<DataListItem
			className={styles.contacts}
			term='Контакты: '
			description={
				<DataList className={styles.datalist}>{contactsElement}</DataList>
			}
		/>
	);
};

export { Contacts };
