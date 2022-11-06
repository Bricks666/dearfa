import React, { FC } from 'react';
import { CommonProps } from '@/types';

import styles from './ContactsItem.module.css';

interface ContactProps extends CommonProps {
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
			<dt className={styles.term}>{term}</dt>
			<dd className={styles.description}>
				<a className={styles.link} href={href} target='_blank' rel='noreferrer'>
					{description}
				</a>
			</dd>
		</>
	);
};

export { ContactsItem };
