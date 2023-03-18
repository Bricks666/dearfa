import cn from 'classnames';
import * as React from 'react';
import styles from './page.module.css';
import { RegistrationForm } from '@/components/RegistrationForm';
import { CommonProps } from '@/types';
import { SectionHeader } from '@/ui';


const RegistrationPage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<main className={cn(styles.main, className)}>
			<SectionHeader className={styles.header}>Регистрация</SectionHeader>
			<RegistrationForm /* onSubmit={onSubmit} */ />
		</main>
	);
};

export default RegistrationPage;
