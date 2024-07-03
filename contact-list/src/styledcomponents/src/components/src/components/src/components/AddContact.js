import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/actions/contactActions';
import { Container, Button, Input } from './StyledComponents';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: Date.now(), name, email, phone };
    dispatch(addContact(newContact));
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Container>
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button type="submit">Add Contact</Button>
      </form>
    </Container>
  );
};

export default AddContact;
