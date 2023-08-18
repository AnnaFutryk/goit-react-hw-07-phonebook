import { createSelector } from '@reduxjs/toolkit';

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
