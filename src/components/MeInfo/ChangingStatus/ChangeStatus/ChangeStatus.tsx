import cn from 'classnames';
import React, { FC } from 'react';
import { Button, Field, SubsectionHeader } from '../../../Shared';

import styles from './ChangeStatus.module.css';

const ChangeStatusForm: FC = (/* {
	handleSubmit,
	pristine,
	className,
} */) => {
	return (
		<form
		/* 			onSubmit={handleSubmit}
			className={cn(styles.form, className)} */
		>
			{/* 			<SubsectionHeader className={styles.header}>
				Изменение статуса
			</SubsectionHeader>
			<ReactField
				className={styles.newStatus}
				render={Field}
				name="status"
			/>
			<Button className={styles.acceptButton} disabled={pristine}>
				Сохранить
			</Button> */}
		</form>
	);
};

export const ChangeStatus: FC = (/* {
	onSubmit,
	status,
	className,
} */) => {
	return null;
	/* 	<ReactForm
			className={className}
			onSubmit={onSubmit}
			initialValues={{ status }}
			component={ChangeStatusForm}
		/> */
};
