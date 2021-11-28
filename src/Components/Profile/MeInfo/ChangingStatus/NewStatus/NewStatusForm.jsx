import React from "react";
import { Field as ReactField } from "react-final-form";
import { Field, SubsectionHeader, Button } from "../../../../Shared";

import NewStatusFormStyle from "./NewStatusForm.module.css";

export const NewStatusForm = ({ handleSubmit, pristine }) => {
	return (
		<form onSubmit={handleSubmit} className={NewStatusFormStyle.form}>
			<SubsectionHeader className={NewStatusFormStyle.header}>
				Изменение статуса
			</SubsectionHeader>
			<ReactField
				className={NewStatusFormStyle.newStatus}
				component={Field}
				name="status"
			/>
			<Button className={NewStatusFormStyle.acceptButton} disabled={pristine}>
				Сохранить
			</Button>
		</form>
	);
};
