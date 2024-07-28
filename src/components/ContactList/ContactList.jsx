import React from 'react';
import ContactListItem from './ContactListItem';

export const ContactList = () => {
    // const dispatch = useDispatch();
    // const contacts = useSelector(getContacts);
    // const filter = useSelector(getFilter);
    // const isLoading = useSelector(getIsLoading);
    // const error = useSelector(getError);
  
    // const filteredContacts = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(filter.toLowerCase())
    // );
  
    return (
      <>
        {/* {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>} */}
        <ul>
          {/* {filteredContacts.map(contact => (
            <ContactListItem key={contact.id} contact={contact} deleteContact={() => dispatch(deleteContact(contact.id))} />
          ))} */}
        </ul>
      </>
    );
  };
  
  