import { Button, Skeleton, Typography } from '@mui/material';
import { RouteInstance } from 'atomic-router';
import { Link } from 'atomic-router-react';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { authUserModel } from '@/entities/auth-user';
import {
	profileInfoModel,
	profileStatusModel,
	TemplateProfileInfo
} from '@/entities/profile';
import { routes, getParams, popups } from '@/shared/configs';
import { useParam } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import styles from './profile-info.module.css';

export interface ProfileInfoProps extends CommonProps {}

export const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
	const { className, } = props;
	const userId = useParam(routes.profile, 'id');
	const { id: authId, } = useUnit(authUserModel.$user)!;
	const isAuth = authId === Number(userId);
	const info = useUnit(profileInfoModel.query);
	const status = useUnit(profileStatusModel.query);

	if (info.pending || status.pending) {
		return (
			<div className={cn(styles.userInfo, className)}>
				<Typography variant='h4' component='h2'>
					<Skeleton width='10em' />
				</Typography>
				<Skeleton className={styles.photo} variant='rounded' />
				<Skeleton className={styles.info} width='25em' height='15em' />
				<Skeleton className={styles.button} width='100%' height='2em' />
			</div>
		);
	}

	return (
		<TemplateProfileInfo
			className={cn(styles.userInfo, className)}
			{...info.data}
			status={status.data}
			actions={
				isAuth ? (
					<>
						<Button
							className={styles.button}
							to={routes.profile as RouteInstance<any>}
							params={{ id: userId, }}
							query={{ [getParams.popups]: popups.updatePhoto, }}
							component={Link}>
							Изменить фото
						</Button>
						<Button
							className={styles.button}
							to={routes.profile as RouteInstance<any>}
							params={{ id: userId, }}
							query={{ [getParams.popups]: popups.updateInfo, }}
							component={Link}>
							Изменить информацию
						</Button>
						<Button
							className={styles.button}
							to={routes.profile as RouteInstance<any>}
							params={{ id: userId, }}
							query={{ [getParams.popups]: popups.updateStatus, }}
							component={Link}>
							Изменить статус
						</Button>
					</>
				) : (
					<Button
						className={styles.button}
						to={routes.dialogs}
						params={{ id: userId, }}
						component={Link}>
						Написать
					</Button>
				)
			}
		/>
	);
};
