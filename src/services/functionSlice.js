import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from 'redux/contacts/thunk';

const arrThunk = [addContactsThunk, deleteContactsThunk, getContactsThunk];

export const operationSwitcher = type => arrThunk.map(el => el[type]);

export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

export const handleFulfilledGet = (state, { payload }) => {
  // handleFulfilled(state)
  state.items = payload;
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
};

export const handleRejected = (state, { payload }) => {
  state.error = payload;
};

export const handleFulfilledDel = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(item => item.id !== payload.id);
};
