import { List } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CommonProps, EmptyObject } from '@/shared/types';
import { DataListItem } from '@/shared/ui';
import { renderContact } from './renderContact';
import styles from './UserDescription.module.css';
import { Contacts } from '@/models/profile';

export interface UserDescriptionProps extends CommonProps {
	readonly contacts: Contacts | EmptyObject;
	readonly aboutMe: string;
	readonly status: string;
	readonly lookingForAJob: boolean;
	readonly lookingForAJobDescription: string;
}
export const UserDescription: React.FC<UserDescriptionProps> = (props) => {
	const {
		className,
		contacts,
		aboutMe,
		status,
		lookingForAJob,
		lookingForAJobDescription,
	} = props;
	const lookingLabel = lookingForAJob ? 'Да' : 'Нет';
	return (
		<List
			className={cn(styles.userDescription, className)}
			dense
			component='dl'>
			<DataListItem term='Обо мне: ' description={aboutMe} />
			<DataListItem term='Статус: ' description={status} />
			<DataListItem term='Ищет работу: ' description={lookingLabel} />
			{lookingForAJob ? (
				<DataListItem
					term='Описание поиска: '
					description={lookingForAJobDescription}
				/>
			) : null}
			<DataListItem
				term='Контакты: '
				description={
					<List dense component='dl'>
						{renderContact(contacts)}
					</List>
				}
			/>
		</List>
	);
};
