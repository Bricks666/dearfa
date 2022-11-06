import React, { FC } from 'react';
import { StandardProps } from '@/interfaces/components';

import ContactsStyle from './ContactsItem.module.css';

interface ContactProps extends StandardProps {
	readonly term: string;
	readonly description: string;
}

const ContactsItem: FC<ContactProps> = ({ description, term }) => {
	if (Boolean(description) === false) {
		return null;
	}
	const href = `${
		description.includes('https://') ? '' : 'https://'
	}${description}`;
	return (
		<>
			<dt className={ContactsStyle.term}>{term}</dt>
			<dd className={ContactsStyle.description}>
				<a
					className={ContactsStyle.link}
					href={href}
					target='_blank'
					rel='noreferrer'>
					{description}
				</a>
			</dd>
		</>
	);
};

export { ContactsItem };
