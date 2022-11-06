import classNames from 'classnames';
import React, { ComponentType, FC } from 'react';
import { EmptyObject } from '@/interfaces/common';
import { StandardProps } from '@/interfaces/components';
import { Contacts } from '@/models/profile';
import { AboutMe, Contacts as ContactsUI, DataList, Status } from '../Shared';

import UserDescriptionStyle from './UserDescription.module.css';

interface UserDescriptionProps extends StandardProps {
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
		<DataList
			className={classNames(UserDescriptionStyle.userDescription, className)}>
			<AboutMe aboutMe={aboutMe} />
			<StatusItem status={status} />
			<ContactsUI contacts={contacts} />
		</DataList>
	);
};
