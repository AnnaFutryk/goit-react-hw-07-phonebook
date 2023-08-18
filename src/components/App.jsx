// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Section } from './Section/Section';
import { Head, SpanFirst, SpanSecond } from './Section/Section.styled';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Section>
        <Head>
          <SpanFirst>Phonebook</SpanFirst>
          <SpanSecond>Phonebook</SpanSecond>
        </Head>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <Filter />
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            Your phonebook is empty. Add first contact!
          </div>
        )}
        {contacts.length > 0 && <ContactList />}
      </Section>
    </>
  );
};
