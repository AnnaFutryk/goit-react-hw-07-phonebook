import axios from 'axios';
const BASE_URL = 'https://64dd391be64a8525a0f7c06f.mockapi.io';

export const contactAPI = axios.create({
  baseURL: 'https://642dff8f2b883abc64053db5.mockapi.io/api/v1',
});

export const fetchContacts = async () => {
  const { data } = await contactAPI.get(`${BASE_URL}/contacts`);
  return data;
};

export const addContact = async contact => {
  const { data } = await contactAPI.post(`${BASE_URL}/contacts`, contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await contactAPI.delete(`${BASE_URL}/contacts/${id}`);
  return data;
};
