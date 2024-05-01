import { createSlice } from '@reduxjs/toolkit';

import { fetchAll, deleteContact, addContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleError = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      const idx = state.items.findIndex(({ id }) => id === action.payload);
      state.items.splice(idx, 1);
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchAll.pending, handlePending);
    builder.addCase(fetchAll.rejected, handleError);
    builder.addCase(addContact.pending, handlePending);
    builder.addCase(addContact.rejected, handleError);
    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(deleteContact.rejected, handleError);
  },
});

export const contactsReducer = contactsSlice.reducer;
