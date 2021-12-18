import classNames from "classnames";
import React, { FC } from "react";

import { Form as ReactForm, Field as ReactField } from "react-final-form";
import {
	FormSubmitHandler,
	IFormInner,
	IOnlyClassComponent,
} from "../../../../Types/Common";
import { Button, Field, SubsectionHeader } from "../../../Shared";

import NewStatusFormStyle from "./NewStatusForm.module.css";

const NewStatusForm: FC<IFormInner<FormValues>> = ({
	handleSubmit,
	pristine,
	className,
}) => {
	return (
		<form
			onSubmit={handleSubmit}
			className={classNames(NewStatusFormStyle.form, className)}
		>
			<SubsectionHeader className={NewStatusFormStyle.header}>
				Изменение статуса
			</SubsectionHeader>
			<ReactField
				className={NewStatusFormStyle.newStatus}
				render={Field}
				name="status"
			/>
			<Button className={NewStatusFormStyle.acceptButton} disabled={pristine}>
				Сохранить
			</Button>
		</form>
	);
};

type FormValues = {
	status: string;
};

interface INewStatus extends IOnlyClassComponent {
	onSubmit: FormSubmitHandler<FormValues>;
	status: string;
}

export const NewStatus: FC<INewStatus> = ({ onSubmit, status, className }) => {
	return (
		<ReactForm<FormValues>
			className={className}
			onSubmit={onSubmit}
			initialValues={{ status }}
			component={NewStatusForm}
		/>
	);
};
