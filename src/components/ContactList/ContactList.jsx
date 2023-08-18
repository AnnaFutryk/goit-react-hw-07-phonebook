import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

import { List, Item, Button } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = contactId => dispatch(deleteContact(contactId));

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <p>
            {contact.name} : <span>{contact.number}</span>
          </p>
          <Button type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
