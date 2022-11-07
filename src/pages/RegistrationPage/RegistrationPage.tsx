import * as React from 'react';
import cn from 'classnames';
import { SectionHeader } from '@/components/Shared';
import { RegistrationForm } from '@/components/RegistrationForm';
import { CommonProps } from '@/types';

import styles from './RegistrationPage.module.css';

const RegistrationPage: FC<CommonProps> = ({ className }) => {
	const onSubmit = useCallback((...data: unknown[]) => console.log(data), []);
	console.log(onSubmit);
	return (
		<main className={cn(styles.main, className)}>
			<SectionHeader className={styles.header}>Регистрация</SectionHeader>
			<RegistrationForm /* onSubmit={onSubmit} */ />
		</main>
	);
};

export { RegistrationPage };
