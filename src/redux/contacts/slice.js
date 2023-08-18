import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDel,
  handleFulfilledGet,
  handlePending,
  handleRejected,
  operationSwitcher,
} from 'services/functionSlice';
import { InitialContactsState } from './initial';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './thunk';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: InitialContactsState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDel)
      .addMatcher(isAnyOf(...operationSwitcher(PENDING)), handlePending)
      .addMatcher(isAnyOf(...operationSwitcher(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...operationSwitcher(FULFILLED)), handleFulfilled);
  },
});

export const contactsReducer = contactSlice.reducer;
