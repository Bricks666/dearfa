import React, { FC } from "react";
import { IOnlyClassComponent } from "../../../../../Types/Common";

import ContactsStyle from "./ContactsItem.module.css";

interface IContactComponent extends IOnlyClassComponent {
	term: string;
	description: string;
}

const ContactsItem: FC<IContactComponent> = ({ description, term }) => {
	if (Boolean(description) === false) {
		return null;
	}
	const href = `${
		description.includes("https://") ? "" : "https://"
	}${description}`;
	return (
		<>
			<dt className={ContactsStyle.term}>{term}</dt>
			<dd className={ContactsStyle.description}>
				<a
					className={ContactsStyle.link}
					href={href}
					target="_blank"
					rel="noreferrer"
				>
					{description}
				</a>
			</dd>
		</>
	);
};

export { ContactsItem };
