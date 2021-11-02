import React from "react";

import { Button } from "../Buttons/Button/Button";

import MakeStyle from "./Make.module.css";

function Make({
	add: handleAdd,
	input: handleInput,
	className,
	placeholder,
	content,
	buttonMessage,
	label,
}) {
	const add = (evt) => {
		evt.preventDefault();

		handleAdd();
	};

	const input = (evt) => {
		evt.preventDefault();

		handleInput(evt.target.value);
	};

	return (
		<form className={`${className ?? ""} ${MakeStyle.form}`}>
			<label className={MakeStyle.label} htmlFor="#make">
				{label}
			</label>
			<textarea
				className={MakeStyle.textarea}
				placeholder={placeholder ?? ""}
				value={content?.text ?? ""}
				onChange={input}
				id="make"
			/>
			<Button className={MakeStyle.button} type="submit" onClick={add}>
				{buttonMessage}
			</Button>
		</form>
	);
}

export { Make };
