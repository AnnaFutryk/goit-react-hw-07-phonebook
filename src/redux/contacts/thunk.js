import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'API/contactsApi';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchContacts()
);

export const addContactsThunk = createAsyncThunk('contacts/addContact', data =>
  addContact(data)
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
