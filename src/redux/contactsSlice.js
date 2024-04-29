import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },

    deleteContact(state, action) {
      const idx = state.findIndex(({ id }) => id === action.payload);
      state.splice(idx, 1);
    },
  },
});

const { addContact, deleteContact } = contactsSlice.actions;
const contactsReducer = contactsSlice.reducer;

export { addContact, deleteContact, contactsReducer };
