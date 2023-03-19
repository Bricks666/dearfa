import { Typography } from '@mui/material';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import { Header } from '@/components/Header';
import { RegistrationForm } from '@/components/RegistrationForm';

const RegistrationPage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<MainLayout className={className} header={<Header />}>
			<Typography variant='h4' align='center' component='h2'>
				Регистрация
			</Typography>
			<RegistrationForm /* onSubmit={onSubmit} */ />
		</MainLayout>
	);
};

export default RegistrationPage;
