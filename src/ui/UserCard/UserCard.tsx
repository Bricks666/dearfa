import * as React from 'react';
import cn from 'classnames';
import { Avatar } from '@mui/material';
import { Link } from 'atomic-router-react';
import { CommonProps } from '@/types';
import { User } from '@/models/users';
import { profileRoute } from '@/routes';
import { Button } from '../Button/Button';
import { ButtonLink } from '../ButtonLink/ButtonLink';

import styles from './UserCard.module.css';

interface UserCardProps extends CommonProps, User {}

export const UserCard: React.FC<UserCardProps> = (props) => {
	const { className, followed, id, name, photos, status } = props;
	return (
		<li className={cn(styles.itemWrapper, className)}>
			<Avatar
				className={styles.photo}
				src={photos.large || ''}
				alt={name}
				to={profileRoute}
				params={{ id }}
				component={Link}
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
