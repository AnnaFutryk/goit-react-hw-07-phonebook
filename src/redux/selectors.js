export const getContacts = state => state.contacts.items; // повертає список контактів зі стану

export const getFilter = state => state.filter; // повертає вдфільтроване зі стану

export const getFilteredContacts = state => {
  const contacts = getContacts(state); // отримуємо список контактів
  const filter = getFilter(state); // відфільтроване
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
