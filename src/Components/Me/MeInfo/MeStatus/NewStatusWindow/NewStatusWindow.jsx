import React from "react";

import { Field } from "../../../../Shared/Field/Field";
import { SubsectionHeader } from "../../../../Shared/SubsectionHeader/SubsectionHeader";
import { Button } from "../../../../Shared/Buttons/Button/Button";

import NewStatusWindowStyle from "./NewStatusWindow.module.css";

export const NewStatusWindow = (props) => {
	return (
		<form
			onSubmit={(evt) => evt.preventDefault()}
			className={NewStatusWindowStyle.form}
		>
			<SubsectionHeader className={NewStatusWindowStyle.header}>
				Изменение статуса
			</SubsectionHeader>
			<Field
				className={NewStatusWindowStyle.newStatus}
				value={props.newStatus}
				input={props.input}
			/>
			<Button
				className={NewStatusWindowStyle.acceptButton}
				onClick={props.setNewStatus}
			>
				Сохранить
			</Button>
		</form>
	);
};
