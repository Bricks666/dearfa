import React from "react";

import ContactsStyle from "./ContactsItem.module.css";

function ContactsItem(props) {
	if (Boolean(props.description) === false) {
		return null;
	}

	return (
		<>
			<dt className={ContactsStyle.term}>{props.term}</dt>
			<dd className={ContactsStyle.description}>
				<a
					className={ContactsStyle.link}
					href={`${props.description.includes("https://") ? "" : "https://"}${
						props.description
					}`}
					target="_blank"
					rel="noreferrer"
				>
					{props.description}
				</a>
			</dd>
		</>
	);
}

export { ContactsItem };
