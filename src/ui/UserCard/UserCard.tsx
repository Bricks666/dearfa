import { Avatar } from '@mui/material';
import { Link } from 'atomic-router-react';
import cn from 'classnames';
import * as React from 'react';
import { User } from '@/shared/api';
import { routes } from '@/shared/configs';
import { Button } from '../Button/Button';
import { ButtonLink } from '../ButtonLink/ButtonLink';

import styles from './UserCard.module.css';
import { CommonProps } from '@/types';

interface UserCardProps extends CommonProps, User {}

export const UserCard: React.FC<UserCardProps> = (props) => {
	const { className, followed, id, name, photos, } = props;
	return (
		<li className={cn(styles.itemWrapper, className)}>
			<Avatar
				className={styles.photo}
				src={photos.large || ''}
				alt={name}
				to={routes.profile}
				params={{ id, }}
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
