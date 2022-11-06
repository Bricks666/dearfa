import cn from 'classnames';
import React, { ComponentType, FC } from 'react';
import { EmptyObject } from '@/types';
import { CommonProps } from '@/types';
import { Contacts } from '@/models/profile';
import { AboutMe, Contacts as ContactsUI, DataList, Status } from '../Shared';

import styles from './UserDescription.module.css';

interface UserDescriptionProps extends CommonProps {
	contacts: Contacts | EmptyObject;
	aboutMe: string;
	status: string;
	Status?: ComponentType<{ status: string }>;
}
export const UserDescription: FC<UserDescriptionProps> = ({
	className,
	contacts,
	aboutMe,
	status,
	Status: StatusItem = Status,
}) => {
	return (
		<DataList className={cn(styles.userDescription, className)}>
			<AboutMe aboutMe={aboutMe} />
			<StatusItem status={status} />
			<ContactsUI contacts={contacts} />
		</DataList>
	);
};
