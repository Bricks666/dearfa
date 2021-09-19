import { ContactsItem } from "./ContactsItem/ContactsItem";

export const renderContact = (contacts) => {
  return Object.entries(contacts)
    .filter((pair) => Boolean(pair[1]))
    .map((pair) => {
      console.log(pair);
      return (
        <ContactsItem term={pair[0]} description={pair[1]} key={pair[0]} />
      );
    });
};
