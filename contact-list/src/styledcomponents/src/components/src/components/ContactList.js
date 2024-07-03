import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, editContact } from '../store/actions/contactActions';
import { Container, Button } from './StyledComponents';

const ContactList = () => {
  const contacts = useSelector(state => state.contact.contacts);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeContact(id));
  };

  const handleEdit = (contact) => {
    const newName = prompt('Enter new name:', contact.name);
    const newEmail = prompt('Enter new email:', contact.email);
    const newPhone = prompt('Enter new phone:', contact.phone);
    dispatch(editContact({ ...contact, name: newName, email: newEmail, phone: newPhone }));
  };

  return (
    <Container>
      <h1>Contact List</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <Button onClick={() => handleRemove(contact.id)}>Remove</Button>
            <Button onClick={() => handleEdit(contact)}>Edit</Button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ContactList;
