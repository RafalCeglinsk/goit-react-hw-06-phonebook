const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addContact: (state, action) => {},
    removeContact: (state, action) => {},
    filterContact: (state, action) => {},
  },
});

export const { addContact, removeContact, filterContact } = tasksSlice.actions;
export default tasksSlice.reducer;
