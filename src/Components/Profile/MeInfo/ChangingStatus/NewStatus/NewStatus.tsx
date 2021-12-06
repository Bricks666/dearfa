import React from "react";

import { Form } from "react-final-form";
import { NewStatusForm } from "./NewStatusForm";

export const NewStatus = ({ onSubmit, status }) => {
	return (
		<Form
			onSubmit={onSubmit}
			initialValues={{ status }}
			component={NewStatusForm}
		/>
	);
};
