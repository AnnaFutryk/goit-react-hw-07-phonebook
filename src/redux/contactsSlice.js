import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contact',
  initialState: initialContacts,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload); // додаємо новий контакт до списку
    },

    prepare(newContact) {
      return {
        payload: { id: nanoid(), ...newContact }, // підготовка контакту з унікальним id
      };
    },
    deleteContact: (state, action) => {
      const index = state.items.findIndex(
        contact => contact.id !== action.payload
      );
      state.items.splice(index, 1); // видалення контакту
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
  { key: 'contacts', storage },
  contactsSlice.reducer
);
