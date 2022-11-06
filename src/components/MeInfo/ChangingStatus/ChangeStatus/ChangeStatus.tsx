import classNames from 'classnames';
import React, { FC } from 'react';
import { Button, Field, SubsectionHeader } from '../../../Shared';

import ChangeStatusStyle from './ChangeStatus.module.css';

const ChangeStatusForm: FC = (/* {
	handleSubmit,
	pristine,
	className,
} */) => {
	return (
		<form
		/* 			onSubmit={handleSubmit}
			className={classNames(ChangeStatusStyle.form, className)} */
		>
			{/* 			<SubsectionHeader className={ChangeStatusStyle.header}>
				Изменение статуса
			</SubsectionHeader>
			<ReactField
				className={ChangeStatusStyle.newStatus}
				render={Field}
				name="status"
			/>
			<Button className={ChangeStatusStyle.acceptButton} disabled={pristine}>
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
