import classNames from 'classnames';
import React, { FC } from 'react';
import { StandardProps } from '@/interfaces/components';
import { User } from '@/models/users';
import { DataList } from '..';
import { Button } from '../Button/Button';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { FullName } from '../UserCardParts/FullName/FullName';
import { Photo } from '../UserCardParts/Photo/Photo';
import { Status } from '../UserCardParts/Status/Status';

import UserCardStyle from './UserCard.module.css';

interface UserCardProps extends StandardProps, User {}

export const UserCard: FC<UserCardProps> = ({
	className,
	followed,
	id,
	name,
	photos,
	status,
}) => {
	return (
		<li className={classNames(UserCardStyle.itemWrapper, className)}>
			<FullName id={id}>{name}</FullName>
			<DataList>
				<Status className={UserCardStyle.status} status={status} />
			</DataList>
			<Photo
				className={UserCardStyle.photo}
				id={id}
				fullName={name}
				photo={photos.large}
			/>
			<ButtonLink className={UserCardStyle.link} to={`/dialogs/${id}`}>
				Написать
			</ButtonLink>
			<Button className={UserCardStyle.button}>
				{followed ? 'Удалить из друзей' : 'Добавить в друзья'}
			</Button>
		</li>
	);
};
