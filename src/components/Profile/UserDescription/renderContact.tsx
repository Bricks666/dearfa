import * as React from 'react';
import { Link } from 'atomic-router-react';
import { Contacts } from '@/models/profile';
import { EmptyObject } from '@/types';
import { DataListItem } from '@/ui';

export const renderContact = (contacts: Contacts | EmptyObject) => {
	return Object.entries(contacts)
		.filter((pair): pair is [string, string] => Boolean(pair[1]))
		.map((pair) => {
			const [term, description] = pair;
			const href = `${
				description.includes('https://') ? '' : 'https://'
			}${description}`;
			return (
				<DataListItem
					term={term}
					description={
						<Link to={href} target='_blank' rel='noreferrer'>
							{description}
						</Link>
					}
					key={pair[0]}
				/>
			);
		});
};
