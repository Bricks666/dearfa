import { Avatar, List, Paper, Typography } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { Info, Status } from '@/shared/api';
import { CommonProps } from '@/shared/types';
import { DataListItem } from '@/shared/ui';
import { ContactsList } from '../contacts-list';
import styles from './template-profile-info.module.css';

export interface TemplateProfileInfoProps extends CommonProps, Info {
	readonly status: Status | null;
	readonly actions?: null | React.ReactElement;
}

export const TemplateProfileInfo: React.FC<TemplateProfileInfoProps> = (
	props
) => {
	const {
		className,
		actions,
		aboutMe,
		contacts,
		lookingForAJob,
		lookingForAJobDescription,
		fullName,
		photos,
		status,
	} = props;

	const lookingLabel = lookingForAJob ? 'Да' : 'Нет';

	return (
		<Paper className={cn(styles.wrapper, className)} variant='outlined'>
			<Typography variant='h4' component='h2'>
				{fullName}
			</Typography>
			<Avatar
				className={styles.photo}
				src={photos.large || ''}
				variant='rounded'
			/>
			<List className={styles.info} dense component='dl'>
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
					description={<ContactsList contacts={contacts} />}
				/>
			</List>
			<div className={styles.actions}>{actions}</div>
		</Paper>
	);
};
