import { Link } from 'atomic-router-react';
import * as React from 'react';
import { EmptyObject } from '@/shared/types';
import { DataListItem } from '@/shared/ui';
import { Contacts } from '@/models/profile';

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
