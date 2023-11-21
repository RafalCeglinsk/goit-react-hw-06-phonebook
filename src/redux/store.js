import { configureStore } from '@reduxjs/toolkit';
import {
  addContact,
  filterContact,
  removeContact,
} from './reducers/filterSlice';

export const store = configureStore({
  reducer: {
    addContact: addContact,
    removeContact: removeContact,
    filterContact: filterContact,
  },
});
