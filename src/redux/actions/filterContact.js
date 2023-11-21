import { createAction } from '@reduxjs/toolkit';

export const FILTER_CONTACT = 'FILTER_CONTACT';

export const filterContact = createAction(FILTER_CONTACT);
console.log(filterContact);
