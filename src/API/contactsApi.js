const BASE_URL = 'https://64dd391be64a8525a0f7c06f.mockapi.io';

export const getContacts = async () => {
  const data = await fetch(`${BASE_URL}/contacts`);
  return await data.json();
};

export const addContact = async data => {
  const res = await fetch(`${BASE_URL}/contacts`, {
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const deleteContact = async id => {
  const res = await fetch(`${BASE_URL}/contacts/${id}`);
  return await res.json();
};
