import classNames from "classnames";
import React, { FC } from "react";
import { Form as ReactForm, Field as ReactField } from "react-final-form";
import {
	ChangeStatusFormComponent,
	IChangeStatusComponent,
} from "../../../../Types/Components";
import { Button, Field, SubsectionHeader } from "../../../Shared";

import ChangeStatusStyle from "./ChangeStatus.module.css";

const ChangeStatusForm: FC<ChangeStatusFormComponent> = ({
	handleSubmit,
	pristine,
	className,
}) => {
	return (
		<form
			onSubmit={handleSubmit}
			className={classNames(ChangeStatusStyle.form, className)}
		>
			<SubsectionHeader className={ChangeStatusStyle.header}>
				Изменение статуса
			</SubsectionHeader>
			<ReactField
				className={ChangeStatusStyle.newStatus}
				render={Field}
				name="status"
			/>
			<Button className={ChangeStatusStyle.acceptButton} disabled={pristine}>
				Сохранить
			</Button>
		</form>
	);
};

export const ChangeStatus: FC<IChangeStatusComponent> = ({
	onSubmit,
	status,
	className,
}) => {
	return (
		<ReactForm
			className={className}
			onSubmit={onSubmit}
			initialValues={{ status }}
			component={ChangeStatusForm}
		/>
	);
};
