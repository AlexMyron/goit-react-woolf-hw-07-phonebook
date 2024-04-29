import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(_, action) {
      return action.payload;
    },
    clearFilter() {
      return '';
    },
  },
});

const { changeFilter, clearFilter } = filterSlice.actions;
const filterReducer = filterSlice.reducer;

export { changeFilter, clearFilter, filterReducer };
