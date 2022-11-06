import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/types';
import { User } from '@/models/users';
import { DataList } from '..';
import { Button } from '../Button/Button';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { FullName } from '../UserCardParts/FullName/FullName';
import { Photo } from '../UserCardParts/Photo/Photo';
import { Status } from '../UserCardParts/Status/Status';

import styles from './UserCard.module.css';

interface UserCardProps extends CommonProps, User {}

export const UserCard: React.FC<UserCardProps> = (props) => {
	const { className, followed, id, name, photos, status } = props;
	return (
		<li className={cn(styles.itemWrapper, className)}>
			<FullName id={id}>{name}</FullName>
			<DataList>
				<Status className={styles.status} status={status} />
			</DataList>
			<Photo
				className={styles.photo}
				id={id}
				fullName={name}
				photo={photos.large}
			/>
			<ButtonLink className={styles.link} to={`/dialogs/${id}`}>
				Написать
			</ButtonLink>
			<Button className={styles.button}>
				{followed ? 'Удалить из друзей' : 'Добавить в друзья'}
			</Button>
		</li>
	);
};
