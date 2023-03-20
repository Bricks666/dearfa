import { List } from '@mui/material';
import { Link } from 'atomic-router-react';
import * as React from 'react';
import { Contacts } from '@/shared/api';
import { CommonProps, EmptyObject } from '@/shared/types';
import { DataListItem } from '@/shared/ui';

export interface ContactsListProps extends CommonProps {
	readonly contacts: Contacts | EmptyObject;
}

export const ContactsList: React.FC<ContactsListProps> = (props) => {
	const { contacts, className, } = props;

	return (
		<List className={className} dense component='dl'>
			{Object.entries(contacts)
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
				})}
		</List>
	);
};
