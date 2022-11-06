import * as React from 'react';
import { ProfileInfo } from '@/models/profile';
import { CommonProps } from '@/types';
import { ModalWindow, Button } from '../Shared';
import { UserDescription } from '../UserDescription/UserDescription';
import { ChangeProfile } from './ChangeProfile/ChangeProfile';
import { ChangingStatus } from './ChangingStatus/ChangingStatus';

import styles from './MeInfo.module.css';

export interface MeInfoProps extends CommonProps {
	readonly user: ProfileInfo;
}

/** TODO: Возможно не стоит делать этот блок, как отдельный компонент */
export const MeInfo: React.FC<MeInfoProps> = (props) => {
	const { user } = props;
	const [showChangeProfile, toggleChangeProfile] =
		React.useState<boolean>(false);
	/* 	const updateProfile = useCallback(
		({ userId, name: fullName, aboutMe, photo, ...contacts }) => {
			dispatch(
				updateProfileThunk({ userId, fullName, aboutMe, photo, contacts })
			);
			toggleChangeProfile(false);
		},
		[dispatch]
	); */

	const toggleShowChangeProfile = React.useCallback(() => {
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
