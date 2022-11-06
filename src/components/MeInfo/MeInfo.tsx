import React, { FC, useCallback, useState } from 'react';
import { ChangeProfile } from './ChangeProfile/ChangeProfile';
import { ChangingStatus } from './ChangingStatus/ChangingStatus';
import { ModalWindow, Button } from '../Shared';
import { UserDescription } from '../UserDescription/UserDescription';
import { User } from '@/models/users';

import styles from './MeInfo.module.css';

interface MeInfoProps {
	readonly user: User;
}

/** TODO: Возможно не стоит делать этот блок, как отдельный компонент */
export const MeInfo: FC<MeInfoProps> = ({ user }) => {
	const [showChangeProfile, toggleChangeProfile] = useState<boolean>(false);
	/* 	const updateProfile = useCallback(
		({ userId, name: fullName, aboutMe, photo, ...contacts }) => {
			dispatch(
				updateProfileThunk({ userId, fullName, aboutMe, photo, contacts })
			);
			toggleChangeProfile(false);
		},
		[dispatch]
	); */

	const toggleShowChangeProfile = useCallback(() => {
		toggleChangeProfile(!showChangeProfile);
	}, [showChangeProfile]);

	return (
		<>
			<UserDescription
				Status={ChangingStatus}
				status={user.status}
				aboutMe={user.status}
				contacts={{}}
			/>
			<Button
				className={styles.changeProfileButton}
				onClick={toggleShowChangeProfile}>
				Изменить профиль
			</Button>
			<ModalWindow
				condition={showChangeProfile}
				close={toggleShowChangeProfile}>
				<ChangeProfile /* {...user} onSubmit={updateProfile}  */ />
			</ModalWindow>
		</>
	);
};
