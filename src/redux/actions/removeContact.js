import { createAction } from '@reduxjs/toolkit';

export const REMOVE_CONTACT = 'REMOVE_CONTACT';

export const removeContact = createAction(REMOVE_CONTACT);
