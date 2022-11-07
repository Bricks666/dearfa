import cn from 'classnames';
import * as React from 'react';
import { Contacts } from '@/models/profile';
import { CommonProps, EmptyObject } from '@/types';
import { DataList, DataListItem } from '@/ui';
import { renderContact } from './renderContact';

import styles from './UserDescription.module.css';

export interface UserDescriptionProps extends CommonProps {
	readonly contacts: Contacts | EmptyObject;
	readonly aboutMe: string;
	readonly status: string;
}
export const UserDescription: React.FC<UserDescriptionProps> = (props) => {
	const { className, contacts, aboutMe, status } = props;
	return (
		<DataList className={cn(styles.userDescription, className)}>
			<DataListItem term='Обо мне: ' description={aboutMe} />
			<DataListItem term='Статус: ' description={status} />
			<DataListItem
				term='Контакты'
				description={<DataList>{renderContact(contacts)}</DataList>}
			/>
		</DataList>
	);
};
