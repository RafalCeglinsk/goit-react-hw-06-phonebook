import { createAction } from '@reduxjs/toolkit';

export const ADD_CONTACT = 'ADD_CONTACT';
export const addContact = createAction(ADD_CONTACT);
console.log(addContact);
